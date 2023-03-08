The social media website has three models in its backend:

## Users:

This model stores information about the website's users, such as their username and email address. It may also include additional details like their password, profile picture, and bio. The Users model handles relationships between users, such as friend requests and friend lists.

## Thoughts:

This model is associated with the user who created it and keeps track of the number of reactions it receives from other users.

## Responses:

This model stores information about the reactions users have to thoughts. It is linked to the Thoughts model and contains details such as the type of responses.
