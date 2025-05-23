const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    billingCycle: {
        type: String,
        enum: ['weekly', 'monthly', 'yearly'],
        default: 'monthly',
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
    },
    category: {
        type: String,
    },
    notes: {
        type: String,
    },
    totalExpense: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ['Active', 'Cancelled']
    },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);