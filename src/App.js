import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="image-container">
          <img 
            src="https://danviet-24h.ex-cdn.com/files/upload/2-2021/images/2021-06-26/630f1213-cb9d-4ee7-947d-04e650493957-1624678874-165-width640height480.jpeg" 
            className="main-image" 
            alt="Vũ" 
          />
        </div>
        
        <div className="text-content">
          <p>Vũ 📞 Alo, em có phải Vũ không?</p>
          <p>😨 Ui Vũ ơi… em đừng có chối 😭</p>
          <p>📄 Thông tin về tên 🧑‍💼, địa chỉ nhà 🏡, trường học 🎓, ở đâu 📍, bố mẹ tên là gì 👨‍👩‍👧‍👦… anh có cả ở đây rồi 🗂️</p>
          <p>🔊 Vũ có cần anh đọc cho nghe một số thông tin không?… 👂📢</p>
          <p>🥺 Vũ ơi… em còn trẻ quá 👶, hơn con anh có mấy tuổi à 😢</p>
          <p>🤦‍♂️Sao Vũ lại làm thế… 😔</p>
          <p>🌱 Còn cả tương lai đằng trước… ✨🎓</p>
          <p>🏃‍♂️📬 Vũ thích anh cho người đến tận nhà nói chuyện với bố mẹ em đấy à?? 😤🏠</p>
        </div>
        
        <button className="popup-button" onClick={openPopup}>
          Click Here
        </button>
        
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h1>Mẹ mày béo</h1>
              <button className="close-button" onClick={closePopup}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
