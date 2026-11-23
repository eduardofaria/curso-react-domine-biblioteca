import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null)
    const intervalRef = useRef(null)
    const [tempoDecorrido, setTempoDecorrido] = useState(0)

   
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if(nextIsPlaying){
        videoRef.current.play()
        intervalRef.current = setInterval(() => {
            console.log(videoRef.current.currentTime)
            setTempoDecorrido(videoRef.current.currentTime)
            if (videoRef.current.paused || videoRef.current.ended){
                clearInterval(intervalRef.current)
                setIsPlaying(false)
            }
  }, 100)
        
    } else {
        videoRef.current.pause()
            setTempoDecorrido(videoRef.current.currentTime)
            clearInterval(intervalRef.current)

    }

  }


    useEffect(() => {
        console.log("Componente Modificado")
    }) // sem parâmetros, vai rodar semore que houver modificação no componente


  useEffect(() => {
    console.dir(videoRef.current) // console.dir mostra todas as propriedades do objeto
  }, [])


  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <p>Tempo: {tempoDecorrido.toFixed(2)}</p>
    </>
  )
}