import React, { useState } from 'react';
import './App.css';


function Keys(){

const [letter, setLetter]= useState('');
return(
  <>
  <section>
  <div className=' row row1'>
  <button onClick={()=>setLetter(letter +'esc')}> esc </button>
<button onClick={()=>setLetter(letter +'F1')}> F1 </button>
<button onClick={()=>setLetter(letter +'F2')}> F2 </button>
<button onClick={()=>setLetter(letter +'F3')}> F3 </button>
<button onClick={()=>setLetter(letter +'F4')}> F4 </button>
<button onClick={()=>setLetter(letter +'F5')}> F5 </button>
<button onClick={()=>setLetter(letter +'F6')}> F6 </button>
<button onClick={()=>setLetter(letter +'F7')}> F7 </button>
<button onClick={()=>setLetter(letter +'F8')}> F8 </button>
<button onClick={()=>setLetter(letter +'F9')}> F9 </button>
<button onClick={()=>setLetter(letter +'F10')}> F10 </button>
<button onClick={()=>setLetter(letter +'F11')}> F11 </button>
<button onClick={()=>setLetter(letter +'F12')}> F12 </button>
<button onClick={()=>setLetter(letter +'calc')}> calc  </button>
<button onClick={()=>setLetter(letter +'CE')}> CE </button>
<button onClick={()=>setLetter(letter +'-/+')}> -/+  </button>
<button onClick={()=>setLetter(letter +'calc')}> down  </button>
<button onClick={()=>setLetter(letter +'CE')}> del </button>
<button onClick={()=>setLetter(letter +'-/+')}> insert  </button>
  </div>

<div className='row row3'>
<button onClick={()=>setLetter(letter +'B')}> Q </button>
<button onClick={()=>setLetter(letter +'C')}> W </button>
<button onClick={()=>setLetter(letter +'E')}> E </button>

<button onClick={()=>setLetter(letter +'C')}> R </button>
<button onClick={()=>setLetter(letter +'E')}> T </button>
<button onClick={()=>setLetter(letter +'E')}> Y </button>
<button onClick={()=>setLetter(letter +'A')}> U </button>
<button onClick={()=>setLetter(letter +'D')}> I </button>
<button onClick={()=>setLetter(letter +'E')}> O </button>
<button onClick={()=>setLetter(letter +'A')}> P </button>
<button onClick={()=>setLetter(letter +'{')} value="{" />
<button onClick={()=>setLetter(letter +'}')} value="}" />
</div>

  </section>




<p>{letter}</p>
<button onClick={()=>setLetter(letter +'A')}> A </button>
<button onClick={()=>setLetter(letter +'B')}> B </button>
<button onClick={()=>setLetter(letter +'C')}> C </button>
<button onClick={()=>setLetter(letter +'D')}> D </button>
<button onClick={()=>setLetter(letter +'A')}> F </button>
<button onClick={()=>setLetter(letter +'B')}> G </button>
<button onClick={()=>setLetter(letter +'C')}> H </button>
<button onClick={()=>setLetter(letter +'E')}> J </button>
<button onClick={()=>setLetter(letter +'A')}> K </button>
<button onClick={()=>setLetter(letter +'B')}> L </button>
<button onClick={()=>setLetter(letter +'C')}> M </button>
<button onClick={()=>setLetter(letter +'D')}> N </button>
<button onClick={()=>setLetter(letter +'D')}> S </button>
<button onClick={()=>setLetter(letter +'B')}> V </button>
<button onClick={()=>setLetter(letter +'D')}> X </button>
<button onClick={()=>setLetter(letter +'E')}> Z </button>


<button onClick={()=>setLetter(letter +'')}>   </button>
<button onClick={()=>setLetter(letter +'E')}>   </button>
<button onClick={()=>setLetter(letter +'A')}>   </button>
<button onClick={()=>setLetter(letter +'B')}>   </button>
<button onClick={()=>setLetter(letter +'C')}>   </button>
<button onClick={()=>setLetter(letter +'D')}>   </button>
<button onClick={()=>setLetter(letter +'E')}>   </button>
<button onClick={()=>setLetter(letter +'E')}>   </button>





  </>
)



}
export default Keys;