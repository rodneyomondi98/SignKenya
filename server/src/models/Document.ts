import mongoose, { Document, Schema } from 'mongoose'

export interface IDocument extends Document {
  title: string
  fileName: string
  filePath: string
  fileSize: number
  mimeType: string
  owner: mongoose.Types.ObjectId
  status: 'draft' | 'pending' | 'signed' | 'expired'
  signatures: Array<{
    userId: mongoose.Types.ObjectId
    signedAt: Date
    signature: string
    ipAddress: string
  }>
  createdAt: Date
  updatedAt: Date
}

const documentSchema = new Schema<IDocument>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'signed', 'expired'],
    default: 'draft',
  },
  signatures: [{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    signedAt: {
      type: Date,
      default: Date.now,
    },
    signature: {
      type: String,
      required: true,
    },
    ipAddress: String,
  }],
}, {
  timestamps: true,
})

export const DocumentModel = mongoose.model<IDocument>('Document', documentSchema)