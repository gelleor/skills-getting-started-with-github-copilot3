# DeploymentTools Repository Summary

## Overview

**Repository:** [VietThienTran/DeploymentTools](https://github.com/VietThienTran/DeploymentTools)  
**Description:** Instructions for automatic installation of online judge systems  
**Language:** Python  
**Stars:** 1  
**Forks:** 12  

## Purpose

The DeploymentTools repository provides automated installation scripts and comprehensive documentation for deploying various online judge systems. Online judge systems are platforms used for competitive programming, coding contests, and automated code evaluation in educational settings.

## Repository Structure

The repository contains deployment instructions and tools for four different online judge systems:

### 1. CMS (Contest Management System)
**Location:** `/CMS/`

#### Description
CMS is a distributed system for running programming contests. This section provides tools for quick and easy installation.

#### Key Features
- One-click deployment script
- Virtual environment-based installation
- Complete system setup automation

#### Installation Process
1. System update and upgrade
2. Automated installation via `install.sh` script
3. Virtual environment configuration
4. Database initialization

#### System Components
- **cmsLogService** - Logging service
- **cmsRankingWebServer** - Ranking display (port 8890)
- **cmsResourceService** - Resource management
- **cmsAdminWebServer** - Administrative interface (port 8889)
- **Contest System** - Main interface (port 8888)

#### Files
- `README.md` - Installation and usage instructions
- `install.sh` - Automated installation script

---

### 2. VNOJ (Vietnam National Online Judge)
**Location:** `/VNOJ/`

#### Description
A comprehensive Docker-based deployment system for VNOJ, featuring detailed Vietnamese documentation for setup and configuration.

#### System Requirements
- **OS:** Ubuntu 20.04 or higher
- **Storage:** 20 GB minimum
- **CPU:** 1 core minimum
- **RAM:** 1 GB minimum

#### Key Features
- Docker and Docker-Compose based deployment
- Support for multiple judge servers (parallel judging)
- Remote judge server capability
- Distributed architecture support
- MySQL database integration

#### Architecture Support
- **Local Server:** Webserver + multiple parallel judges
- **Remote Judge:** Additional judge servers for load distribution
- SSHFS connectivity between servers

#### Configuration Areas
1. **Environment Variables** (`dmoj/environment/`)
   - MySQL database configuration
   - Admin credentials
   - Site URL and media settings

2. **Docker Configuration**
   - Database settings (MySQL)
   - Site configuration
   - Network and security settings

#### Files
- `readme.md` - Main installation guide (Vietnamese)
- `Install for develope mode.md` - Development environment setup
- `sample-config/` - Sample configuration files

---

### 3. Greenhat Online Judge
**Location:** `/Greenhat Online Judge/`

#### Description
Deployment tools for the Greenhat Online Judge system.

#### Notes
- Limited documentation available in the repository
- May require additional setup instructions from external sources

---

### 4. Qingdao Online Judge
**Location:** `/Qingdao Online Judge/`

#### Description
An open source online judge system based on Vue, Django, and Docker.

#### Technology Stack
- **Frontend:** Vue.js
- **Backend:** Django
- **Deployment:** Docker

#### Official Website
[https://qduoj.com](https://qduoj.com)

#### Installation Process
1. Install Docker and Docker-Compose
   ```bash
   sudo apt update
   sudo apt upgrade
   sudo apt install docker.io docker-compose
   ```

2. Build Docker Container
   ```bash
   wget https://raw.githubusercontent.com/VietThienTran/DeploymentTools/main/QingdaoOnlineJudge/docker-compose.yml
   sudo docker-compose up -d
   ```

#### Key Features
- Modern web interface with Vue.js
- Robust Django backend
- Containerized deployment for easy setup
- Complete Docker-based infrastructure

---

## Common Themes

### Technology Stack
- **Containerization:** Heavy use of Docker and Docker-Compose
- **Scripting:** Bash scripts for automation
- **Databases:** MySQL for data persistence
- **Python:** Backend implementation

### Deployment Philosophy
- **Automation First:** One-click or minimal-step installations
- **Containerization:** Docker-based deployments for consistency
- **Scalability:** Support for distributed architectures
- **Documentation:** Comprehensive setup guides

### Target Users
- Educational institutions
- Competitive programming organizers
- Coding contest administrators
- Online learning platforms

## Use Cases

1. **Educational Institutions:** Deploy online judge systems for programming courses
2. **Competitive Programming:** Host programming contests and competitions
3. **Skill Assessment:** Automated code evaluation and testing
4. **Learning Platforms:** Provide hands-on coding practice environments

## Advantages

1. **Simplified Deployment:** Automated scripts reduce setup complexity
2. **Multiple Options:** Four different systems to choose from based on needs
3. **Docker Support:** Containerized deployments ensure consistency across environments
4. **Scalability:** Support for distributed judge servers for high-load scenarios
5. **Community Tested:** 12 forks indicate active community usage and testing

## Considerations

1. **Documentation Language:** Some documentation (VNOJ) is in Vietnamese
2. **System Requirements:** Requires Linux environment (Ubuntu recommended)
3. **Technical Knowledge:** Basic understanding of Docker and Linux administration helpful
4. **Resource Planning:** Proper planning needed for multi-server deployments

## Conclusion

The DeploymentTools repository serves as a valuable resource for anyone looking to deploy online judge systems quickly and efficiently. With support for multiple popular platforms (CMS, VNOJ, Greenhat, and Qingdao), comprehensive documentation, and automated deployment scripts, it significantly reduces the barrier to entry for setting up competitive programming and automated code evaluation platforms.

The repository's focus on Docker-based deployments and automation aligns with modern DevOps practices, making it suitable for both small-scale educational use and larger competitive programming events.
