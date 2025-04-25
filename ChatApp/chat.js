import { usersData,JsonData } from "./export.js";

const chatlist = document.querySelector('.chats');
 
window.addEventListener('load', () => {
 
   getChats(usersData);
});
const displayMsg = document.querySelector('.displayMsg');
if (!displayMsg) {
   console.error('Right container not found. Check if element with class "right" exists in HTML');
}

// Add basic styling to the right container
if (displayMsg) {
   displayMsg.style.flex = "1";
   displayMsg.style.padding = "20px";

   
}

const fragment = document.createDocumentFragment();
const outer = document.createElement("div");
outer.classList.add("outer");

 function getChats(usersData) {
   usersData.forEach((user) => {
       const chat = document.createElement("div");
      chat.classList.add("chat");
      chat.style.display = "flex";
   
     
    
      
    
      chat.style.backgroundColor = "white";
    
      chat.style.width = "100%";
      const avatar = document.createElement("img");
      avatar.style.width = "50px";
      avatar.style.height = "50px";
   
      avatar.src = user.avatar;
      avatar.alt = user.name;
      avatar.classList.add("avatar");
      const name = document.createElement("h3");
      name.classList.add("name");
      name.innerText = user.name;

   const msg =document.createElement("div");
      msg.classList.add("msg");
      const lastmessage = document.createElement("p");
      lastmessage.classList.add("lastmessage");
      lastmessage.innerText = user.lastmessage;
      const time = document.createElement("span");
      time.classList.add("time");
      time.innerText = user.time;

    msg.append(name,lastmessage);
      
      chat.append(avatar,msg,time);

       chat.addEventListener("click", () => {
         try {
            if (!displayMsg) {
               console.error('displayMsg element not found');
               return;
            }
      
            const chatbox = document.createElement("div");
            chatbox.classList.add("chatbox");
            const userAvatar = document.createElement("img");
            userAvatar.src = user.avatar;
            userAvatar.alt = user.name;
            userAvatar.classList.add("userAvatar");
           
            const container = document.createElement("div");
            container.classList.add("container");
            
            const chatname = document.createElement("h3");
            chatname.classList.add("chatname");
            chatname.innerText = user.name;
            
            const chatmsg = document.createElement("p");
            chatmsg.classList.add("chatmsg");
            chatmsg.innerText = user.lastmessage;

            container.append(chatname, chatmsg);
            chatbox.style.height = "100px";
            chatbox.append(userAvatar, container);

            const reply = document.createElement("div");
            reply.classList.add("reply");
            
            // Add messages from JsonData
            reply.innerHTML = `
                <p class="bot">${JsonData.chat1[0].msg.message}</p>
                <p class="person">${JsonData.chat1[1].msg.message}</p>
                <p class="bot">${JsonData.chat1[2].msg.message}</p>
                <p class="person">${JsonData.chat1[3].msg.message}</p>
                <div class="end">
                    <input class="write" type="text" placeholder="Type a message...">
                    <button class="send" type="button">Send</button>
                </div>
            `;

            const input = reply.querySelector('.write');
            const sendButton = reply.querySelector('.send');
            input.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') {
                  const newMessage = document.createElement('p');
                  newMessage.classList.add('person');
                  newMessage.innerText = input.value;
                  reply.insertBefore(newMessage, reply.querySelector('.end'));
                  input.value = ''; // Clear the input field
               }
            });

            sendButton.addEventListener('click', () => {
               if (input.value.trim() !== '') {
                  const newMessage = document.createElement('p');
                  newMessage.classList.add('person');
                  newMessage.innerText = input.value;
                  reply.insertBefore(newMessage, reply.querySelector('.end'));
                  input.value = ''; // Clear the input field
               }
            });


          
            reply.style.cursor = "pointer";
            
            displayMsg.innerHTML = "";
            displayMsg.append(chatbox, reply);
            
            console.log('Chat box added:', chatbox);
         } catch (error) {
            console.error('Error creating chat box:', error);
         }
      });
      
      fragment.appendChild(chat);
        

        
    });
    chatlist.append(fragment);
   
 }



