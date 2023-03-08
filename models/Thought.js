const { Schema, model } = require("mongoose"); // import mongoose
const dateFormat = require("./../utils/dateFormat"); // import dateFormat
const responseSchema = require("./Response"); // import reactionSchema

// create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    responses: [responseSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get total count of responses on retrieval
thoughtSchema.virtual("responseCount").get(function () {
  return this.responses.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
