# Voiceflow Live Answer Discord Example

### Use Voiceflow Dialog Manager API and Knowledge Base to run a live answer Discord Bot

# Prerequisite

- [Discord App](https://discord.com/developers/applications)
- [Voiceflow](https://www.voiceflow.com/) **Chat Assistant** project

# Setup

![discord-logo.jpg](images/discord-logo.jpg)

### Create your Discord App

Go to to [https://discord.com/developers/applications](https://discord.com/developers/applications) to create your Discord app

![CleanShot 2023-05-25 at 13.12.22.png](images/CleanShot_2023-05-25_at_13.12.22.png)

Name your application and click “**Create**”

![CleanShot 2023-05-25 at 13.12.46.png](images/CleanShot_2023-05-25_at_13.12.46.png)

From the General Information tab, copy the **APPLICATION ID** and **save it for later**

![CleanShot 2023-05-25 at 13.20.54.png](images/CleanShot_2023-05-25_at_13.20.54.png)

On the Bot tab, generate a Token by clicking on **Reset Token** button

![CleanShot 2023-05-25 at 13.21.58.png](images/CleanShot_2023-05-25_at_13.21.58.png)

Copy the newly created token and **save it for later**

![CleanShot 2023-05-25 at 13.23.44.png](images/CleanShot_2023-05-25_at_13.23.44.png)

Scroll down and toggle **PRESENCE INTENT**, **SERVER MEMBERS INTENT** and **MESSAGE CONTENT INTENT**. Do not forget to save your changes.

![CleanShot 2023-05-25 at 13.24.20.png](images/CleanShot_2023-05-25_at_13.24.20.png)

Now, on the OAuth2 tab, select bot for the **SCOPES** and give the **BOT PERMISSIONS** you need.

Once it’s done, click the **Copy** button at the bottom of the page.

![CleanShot 2023-05-25 at 13.28.23.png](images/CleanShot_2023-05-25_at_13.28.23.png)



Open this link in a new tab and add the bot to **your Discord server**

![CleanShot 2023-05-25 at 13.30.13.png](images/CleanShot_2023-05-25_at_13.30.13.png)

![CleanShot 2023-05-25 at 13.33.26.png](images/CleanShot_2023-05-25_at_13.33.26.png)

![CleanShot 2023-05-25 at 13.34.21.png](images/CleanShot_2023-05-25_at_13.34.21.png)

On your Discord server you should now see the bot in the Users tab and a new message

![CleanShot 2023-05-25 at 13.34.53.png](images/CleanShot_2023-05-25_at_13.34.53.png)

![CleanShot 2023-05-25 at 13.45.32.png](images/CleanShot_2023-05-25_at_13.45.32.png)

If you haven’t activated the Developer Mode already, do it by going to the settings: **APP SETTINGS** > **Advanced**

![CleanShot 2023-05-25 at 13.39.25.png](images/CleanShot_2023-05-25_at_13.39.25.png)

**Right click** on your server icon in the left sidebar, click on **Copy Server ID** and **save it for later**.

![CleanShot 2023-05-25 at 13.41.28.png](images/CleanShot_2023-05-25_at_13.41.28.png)

> You should now have:
an <mark>app key</mark>
a <mark>bot token</mark>
a <mark>server id</mark>
>

![200x200.png](images/200x200.png)

### Get your project Dialog API key

Go to **Voiceflow Creator** and open the Chat Assistant project you want to use.
Click on **Integration** from the left sidebar (or press the 6 key)


![voiceflow-integration.png](images/voiceflow-integration.png)

Select the **Dialog API** integration, click **Copy API Key** to copy your Voiceflow Dialog API Key and **save it for later**


### Setup the .env file

Rename the .env.template file to .env in your directory


**DISCORD_TOKEN**
Discord bot token

**APP_ID**
Discord App ID

**SERVER_ID**
Discord server ID

**VOICEFLOW_API_URL**
Voiceflow Dialog API endpoint (default to general runtime)

**VOICEFLOW_API_KEY**
Voiceflow project API key (from the Integration section)

**VOICEFLOW_VERSION_ID**
Voiceflow project version ID (only for transcripts, default to 'development')

**VOICEFLOW_PROJECT_ID**
Voiceflow project ID (only for transcripts)

**LIVEANSWERS_CHANNELS**
A list of the channels where the bot will be active (comma separated)

**THREADS**
Set if you want to use threads for the answer or not (default to true)


### Run your app

In the root of your directory, run the following command to install the dependencies and run the app

```bash
npm start
```

## Videos

Here is a loom video showing the setup of the Discord bot and the Voiceflow project.

[https://www.loom.com/share/5b96b4f52b494b64bd82a123f4f23c7f?sid=f223113f-0b80-4316-9580-6a5423ff133f](https://www.loom.com/share/5b96b4f52b494b64bd82a123f4f23c7f?sid=f223113f-0b80-4316-9580-6a5423ff133f)

