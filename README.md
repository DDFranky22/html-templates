# mjml Email Templates Creator

## WARNING ##
This project is meant to be used only locally and not deployed to a server.

This repo is a combination of two projects Vue 3 + node that gives you a graphic interface to realize html templates using the mjml library.
The aim of the project is to have a convenient way to create/store/update emails using the mjml syntax and see the preview of these emails with the minimal amount of manual labor.
The editor (Codemirror 5) also provides an autocomplete option for the tags available (the list of tags was taken from the mjml documentation).

The projects are separated as follow:

- backend: a nodejs application that handles the saving of the files and the conversion from mjml tags to html.
- frontend: a Vue 3 application that handles the gui.

## Prerequisites

In order to use this project you need node 18 or greater.
The use of nvm is greatly encouraged.

## How to run

In order to launch the application itself you need to do a couple of steps.

1. Create the .env file or create the appropriate environment variables for both the projects backend and frontend.
2. Go inside the frontend project
3. Run ``node run build``
4. If everything is ok, go inside the backend project
5. Run ``node run build``
6. Run ``node run start``

If everything worked correctly you should be able to go to ``localhost:{port}`` and be greeted with the user interface.

## Functionalities

The application offers these functionalities in the top bar:

1. New file: creates a new file
2. New from template: create a new file but loads the content from a previously saved template.
3. Load file: load a previously saved file
4. Save: save the file
5. Save as template: save the current file as a template
6. Download HTML: create a .html file and downloads it. This is used as the output of the email you generate
7. Send test email: send a test email to a specified address with the file you are currently editing

Additionally there are:

1. (While editing) ``Ctrl+S``: save the file
2. (While editing) ``Ctrl+P``: preview the email without saving
3. Sun/Moon icon in preview area: change the preview area from light mode (white) to dark mode (black). This is usefull since more and more people are using email clients in dark mode or custom modes.

## env files

Since there are effectivly two different project, there are two different .env files that can be created. Both the project contain a .env.dist file with default/empty values to help you create the correct .env file.

### backend env

```
# where the files you create are saved
SAVED_FILE_PATH=../saved-files
# temporary folder to create the downloadable file
TMP_FOLDER=../tmp
# where the templates are saved
TEMPLATE_FILE_PATH=../templates
# where the application listen
PORT=3000
# name of the service for sending emails (i.e. gmail)
MAILER_SERVICE=
# mail user
MAILER_USER=
# mail password
MAILER_PASSWORD=
# mail address
MAILER_SENDER=
```

### frontend env

```
# the endpoint of the node application
VITE_API_ENDPOINT=http://localhost:3000
```

