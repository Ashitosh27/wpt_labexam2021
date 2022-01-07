//import axios from "axios";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <One />
    </div>
  );
}

function One() {
  const name = "Ashitsoh Rathod";
  const id = "210940320027";
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  function validation() {
    if (message == "") {
      alert("please enter message");
    }
  }

  /*
  const addmsg=async ()=>{
    const url="http://localhost:4000/msg";
    const messages={
      message:message
    };

    await axios.post(url,messages);

    const newlist=[...message,messages];
    setlist(newlist);

  }

  const showMsg=()=>{
    const url="http://localhost:4000/add-msg";

    const result=await axios.get(url);
    const list1=result.data;
    setlist(list1);
  }*/
  // function position(){
  //   for(let i=0;i<list.length;i++){
  //     if(i==0 || (i%2)==0){
  //       style={d:"flex" ,justify content: "start"}
  //     }
  //     else{
  //       style={d:"flex",justify-content :"end" }
  //     }
  //   }
  //}

  const addmessage = (e) => {
    setmessage(e.target.value);
  };

  const send = () => {
    const newlist = [...list, message];
    setlist(newlist);

    setmessage("");
  };

  return (
    <div className="container">
      <div className="bg-secondary d-flex justify-content-start align-items-center">
        <div>
          <h3 className="me-2">MyChatApp</h3>
        </div>
        <div>
          <p>
            by {name}/{id}
          </p>
        </div>
      </div>
      <div className="row mt-2 d-flex">
        <div className="col-8">
          <input
            type="text"
            className="w-100"
            placeholder="Lets Chat here..."
            value={message}
            onChange={addmessage}
          />
        </div>
        <div className="col-4">
          <input
            type="button"
            value="Send"
            className=" w-100"
            onClick={send,validation}
          />
        </div>
      </div>

      <div>
        {list.map((item) => (
          <div className="alert alert-secondary mt-1">{item}</div>
        ))}
      </div>
    </div>
  );
}
