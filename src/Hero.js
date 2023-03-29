const Hero = () => {

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        gap: '4px', 
        margin: '4px' }}>
        <h1 style={{
            background: 'linear-gradient(60deg, purple 0%, lightskyblue 100%)',
            color: 'transparent',
            backgroundClip: 'text',
            webkitBackgroundClip: 'text',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '6px'}}>
            Provide anything,
        </h1>
        <h1 style={{
            background: 'linear-gradient(60deg, purple 0%, lightskyblue 100%)',
            color: 'transparent',
            backgroundClip: 'text',
            webkitBackgroundClip: 'text',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '6px'}}>
            withdraw anytime.
        </h1>
    </div>
  )
}

export default Hero