

export default function SimpleMailForm() {
 

  function sendMail() {
    
    const mail = `mailto:dhanrajrathore750@gmail.com?subject=New`;
    window.location.href = mail;
  }

  return (
    <div className="p-4 max-w-sm mx-auto space-y-3">
    
      <button
        onClick={sendMail}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
