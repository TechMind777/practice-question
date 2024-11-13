cd %USERPROFILE%\.ssh

ssh-keygen -t rsa -C "ajaysofficial2024@gmail.com" -f "ajaysofficial2024"
ssh-keygen -t rsa -C "ajayrajpoot1993@gmail.com" -f "ajayrajpoot1993"


2. Add SSH keys to SSH Agent
    We will add above generated keys to ssh-agent.

     ssh-add %USERPROFILE%\.ssh/ajaysofficial2024
     ssh-add %USERPROFILE%\.ssh/ajayrajpoot1993

      