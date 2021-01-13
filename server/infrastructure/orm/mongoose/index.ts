import mongoose from 'mongoose'

import env from '../../config/env'

mongoose.connect(env.database.url, { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose
