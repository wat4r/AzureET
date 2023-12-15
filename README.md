<h1 align="center">
  <img src="static/logo.png" alt="AzureET" width="380px">
  <br>
</h1>

<h4 align="center">
    AzureET is Microsoft azure cloud security testing toolkit for cybersecurity red team.
</h4>

<p align="center">
<a href="https://github.com/wat4r/AzureET/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a>
<a href="https://github.com/wat4r/AzureET/releases"><img src="https://img.shields.io/github/release/wat4r/AzureET"></a>
</p>

<p align="center">
  <!-- <a href="#features">Features</a> • -->
  <a href="https://github.com/wat4r/AzureET/releases">Releases</a> •
  <a href="#usage">Usage</a> •
  <a href="#installation">Installation</a> •
  <a href="#config">Config</a> •
  <a href="https://github.com/wat4r/AzureET">Documentation</a>
</p>

## Usage
```sh
AzureET --help

    _                        _____ _____
   / \    _____   _ _ __ ___| ____|_   _|
  / _ \  |_  / | | | '__/ _ \  _|   | |
 / ___ \  / /| |_| | | |  __/ |___  | |
/_/   \_\/___|\__,_|_|  \___|_____| |_| v1.0.0

🎉 Usage: AzureET [module] [command] [args...]
```

## Installation
Go to [releases](https://github.com/wat4r/AzureET/releases) to download the latest version of the AzureET binary file corresponding to the operating system, and then run it.


## Config
Set the authentication mode to TOKEN(Refresh token) or APP(Client credential)
```sh
AzureET Config SetMode -mode TOKEN
AzureET Config SetMode -mode APP
```

Set refresh token
```sh
AzureET Config SetRefreshToken -token token.txt
// or
AzureET Config SetRefreshToken -token 0.AVUAIE......
```

Set app client credential
```sh
AzureET Config SetClientCredential -tenant [Tenant] -clientId [ClientId] -secret [ClientSecret]
```

## Contact
If you have any issues or feature requests, please contact us. PR is welcomed.
 - [Issues](https://github.com/wat4r/AzureET/issues)
 - [New issue](https://github.com/wat4r/dpapitk/issues/new)
