- dashboard only side bar
- likes and dislikes
- followers
- authenticated properly
- secure frontend bcrypt options ?



```sh
# MODELS (Needs Update)
Comments	
    likes, dislikes, comment, date_created
    date_modified, author, post, parent

Messages
    thread, sender_user, reciever_user, body
    image, date_created, date_modified, is_read	

Thread models	
    user, reciever

Posts:
    body, image, date_created, date_modified
    author, likes, dislikes

Notifications
    notification_type, to_user ,from_user, post, 
    comment, thread, date_created, date_modified,
    user_has_seen

User 
 bio, birth_date, date_joined, email, first_name, groups, id, is_active, is_staff, is_superuser, last_login, last_name, location, picture, user_permissions, username
```

Dashboard Pages
- Profile.js
- ProfileForm.js

Ideas for New:
- Global Warming Map
- Clean Drinking Water
- C02 Emmissions on Each continent
...