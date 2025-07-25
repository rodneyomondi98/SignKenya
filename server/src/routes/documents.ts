import express from 'express'
import { body, validationResult } from 'express-validator'
import { DocumentModel } from '../models/Document.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// Get all documents for authenticated user
router.get('/', authenticate, async (req: any, res) => {
  try {
    const documents = await DocumentModel.find({ owner: req.user._id })
      .populate('owner', 'name email')
      .sort({ createdAt: -1 })

    res.json({ documents })
  } catch (error) {
    console.error('Get documents error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Get single document
router.get('/:id', authenticate, async (req: any, res) => {
  try {
    const document = await DocumentModel.findOne({
      _id: req.params.id,
      owner: req.user._id,
    }).populate('owner', 'name email')

    if (!document) {
      return res.status(404).json({ message: 'Document not found' })
    }

    res.json({ document })
  } catch (error) {
    console.error('Get document error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Create new document
router.post('/', authenticate, [
  body('title').notEmpty().withMessage('Title is required'),
  body('fileName').notEmpty().withMessage('File name is required'),
], async (req: any, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { title, fileName, filePath, fileSize, mimeType } = req.body

    const document = new DocumentModel({
      title,
      fileName,
      filePath: filePath || `/uploads/${fileName}`,
      fileSize: fileSize || 0,
      mimeType: mimeType || 'application/pdf',
      owner: req.user._id,
    })

    await document.save()

    res.status(201).json({
      message: 'Document created successfully',
      document,
    })
  } catch (error) {
    console.error('Create document error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Sign document
router.post('/:id/sign', authenticate, [
  body('signature').notEmpty().withMessage('Signature is required'),
], async (req: any, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { signature } = req.body
    const document = await DocumentModel.findById(req.params.id)

    if (!document) {
      return res.status(404).json({ message: 'Document not found' })
    }

    // Add signature
    document.signatures.push({
      userId: req.user._id,
      signature,
      signedAt: new Date(),
      ipAddress: req.ip,
    })

    document.status = 'signed'
    await document.save()

    res.json({
      message: 'Document signed successfully',
      document,
    })
  } catch (error) {
    console.error('Sign document error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router