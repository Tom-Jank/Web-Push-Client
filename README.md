### Web-Push notifications using VAPID in Angular 14

* [General info] (#general-info)
* [Technologies] (#technologies)
* [Important details] (#important-details)

## General info

This project is an Angular 14 application for push notifications. It is not using firebase or onesignal, but VAPID and Angular PWA generated service worker.
You can find spring server in my other repo under this link: https://github.com/Tom-Jank/Web-Push-Server. 

## Technologies

* Angular 14
* Angular PWA

## Important details

In order to make use of Service Worker you have to start application in production mode:
```
$ ng build --configuration production
$ cd dist
$ cd <your-directory>
$ http-server . -p 4200
```


