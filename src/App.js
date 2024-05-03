import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "StyleSpeech Demo";
  }, []);
  return (
    <div className="App">
      
      <h1>Listen to the Audio</h1>
      <table>
          <tr>
              <th>Context</th>
              <th>FastSpeech</th>
              <th>StyleSpeech</th>
          </tr>
          <tr>
              <td>红鲤鱼与绿鲤鱼 (hong2, li3, yu2, yu3, lv4, li3, yu2)</td>
              <td>
                  <audio controls>
                      <source src="/demo/FastSpeech_0.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
              <td>
                  <audio controls>
                      <source src="/demo/StyleSpeech_0.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
          </tr>
          <tr>
              <td>八百标兵奔北坡 (ba1, bai3, biao1, bing1, ben4, bei3, po1)</td>
              <td>
                  <audio controls>
                      <source src="/demo/FastSpeech_1.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
              <td>
                  <audio controls>
                      <source src="/demo/StyleSpeech_1.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
          </tr>
          <tr>
              <td>从东边来了个喇嘛 (cong2 dong1 bian1 lai2 le ge4 la3 ma)</td>
              <td>
                  <audio controls>
                      <source src="/demo/FastSpeech_2.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
              <td>
                  <audio controls>
                      <source src="/demo/StyleSpeech_2.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
          </tr>
          <tr>
              <td>蒸羊羔、蒸熊掌、蒸鹿尾儿 (zheng1 yang2 gao1 、 zheng1 xiong2 zhang3 、 zheng1 lu4 wei3 er2)</td>
              <td>
                  <audio controls>
                      <source src="/demo/FastSpeech_3.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
              <td>
                  <audio controls>
                      <source src="/demo/StyleSpeech_3.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
          </tr>
          <tr>
              <td>卤鸭、酱鸡、腊肉 (lu3 ya1 、 jiang4 ji1 、 la4 rou4)</td>
              <td>
                  <audio controls>
                      <source src="/demo/FastSpeech_4.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
              <td>
                  <audio controls>
                      <source src="/demo/StyleSpeech_4.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
          </tr>
          <tr>
              <td>任命是任命，人名是人名 (ren4 ming4 shi4 ren4 ming4 ， ren2 ming2 shi4 ren2 ming2)</td>
              <td>
                  <audio controls>
                      <source src="/demo/FastSpeech_5.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
              <td>
                  <audio controls>
                      <source src="/demo/StyleSpeech_5.wav" type="audio/mpeg"></source>
                  </audio>
              </td>
          </tr>
          
      </table>
    </div>
  );
}

export default App;
