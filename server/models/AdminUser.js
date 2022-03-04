const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const adminUserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        }
    },

    {
        toJSON: {
            virtuals: true
        }
    }
)

// hash user password
adminUserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

// custom method to compare and validate password for logging in
adminUserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const AdminUser = model('AdminUser', adminUserSchema)
module.exports = AdminUser