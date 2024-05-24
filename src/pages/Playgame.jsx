import React, { useState, useRef } from 'react'
import { Button, Input, Alert, Slider } from 'antd';
import { Link } from 'react-router-dom';

function Playgame() {
    const [content, setContent] = useState('home');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef(null);
    const handleVolumeChange = (value) => {
        setVolume(value);
        if (audioRef.current) {
            audioRef.current.volume = value;
        }
    };
    const handle = () => {
        if (answer === 'PTopSudLor') {
            setContent('stepfinal');
        } else {
            setError(true);
        }
    };

    const Content = () => {
        switch (content) {
            case 'step1':
                return (
                    <>
                        <h1>ไม่ให้หรอก 🤣 🤣 🤣  </h1>
                        <Button style={{margin:"1rem 0.3rem"}} type='dashed' onClick={() => setContent('step2')}>ลองขออีกครั้ง</Button>
                        <Button style={{margin:"1rem 0rem"}} type='dashed' onClick={() => setContent('stepOver')}>🤬</Button>
                    </>
                );
            case 'step2':
                return (
                    <>
                        <h1>เห็นแก่ความสงสาร เลือกว่าพี่ชอบอีโมจิอันไหน 🤣🤣🤣</h1>
                        <center><h2>เลือกมาอันนึง</h2></center>
                        <Button style={{margin:"1rem 0.3rem"}} type='dashed' onClick={() => setContent('step3')}>🤣</Button>
                        <Button style={{margin:"1rem 0rem"}} type='dashed' onClick={() => setContent('step3')}>🤣🤣🤣</Button>
                    </>
                );
            case 'step3':
                return (
                    <>
                        <h1>น้องเคยแก้เลขฐานสองไหม</h1>
                        <center><img src="/tableascii.JPG" width={200} height={200} className="spin"/></center>
                        <Button style={{margin:"1rem 0.3rem"}} type='dashed' onClick={() => setContent('step4')}>เคย</Button>
                        <Button style={{margin:"1rem 0rem"}} type='dashed' onClick={() => setContent('step4')}>เคย🤣</Button>
                    </>
                );
            case 'step4':
                return (
                    <>
                        <h1>น้องลองแก้อันนี้ให้หน่อย</h1>
                        <p>ใช้เว็บแก้ได้</p>
                        <center><img src="/tableascii.JPG" width={200} height={200} className="spin"/></center>
                        <h6>01010000 01010100 01101111 01110000 01010011 01110101 01100100 01001100 01101111 01110010</h6>
                        {error && <Alert message="ยังไม่ใช่น้องรัก" type="error" showIcon />}
                        <Input 
                            placeholder='ตอบตรงนี้' 
                            value={answer} 
                            onChange={(e) => { 
                                setAnswer(e.target.value);
                                setError(false);
                            }} 
                        />
                        <Button style={{margin:"1rem 0rem"}} type='primary' onClick={handle}>ลองตอบ</Button>
                        
                    </>
                );
            case 'stepOver':
                return (
                    <>
                        <h1>แพ้แล้วน้องรัก ไปเริ่มใหม่เลย 🤣🤣🤣</h1>
                        <Link to="/"><Button style={{margin:"1rem 0.3rem"}} type='dashed' >ไม่กลับ</Button></Link>
                    </>
                );
            case 'stepfinal':
                return (
                    <>
                        <h3>คำใบ้ก็คือ</h3>
                        <h1>หนิฟตึกก้า</h1>
                    </>
                );
            default:
                return (
                    <>
                        <h1>น้องอยากได้คำใบหรอ</h1>
                        <Button style={{margin:"1rem 0.3rem"}} type='dashed' onClick={() => setContent('stepOver')}>ไม่อะไม่อยากได้</Button>
                        <Button style={{margin:"1rem 0rem"}} type='dashed' onClick={() => setContent('step1')}>อยากได้</Button>
                    </>
                );
        }
    };

    return (
        <div>
            <audio src="/lobby.mp3" autoPlay loop ref={audioRef} />
            <img src="/helloworld.png" width={90} height={100} className="spin" />
            <div className="content">
                {Content()}
            </div>
            <div style={{ marginTop: '20px' }}>
                <p>ลด-เพิ่มเสียงเพลง</p>
                <Slider 
                    min={0} 
                    max={1} 
                    step={0.01} 
                    value={volume} 
                    onChange={handleVolumeChange} 
                    style={{ width: '200px', margin: '0 auto' }} 
                />
            </div>
        </div>
    );
}

export default Playgame;
