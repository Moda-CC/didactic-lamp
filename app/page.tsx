export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Welcome to Didactic Lamp
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#666' }}>
        This Next.js application is configured with Vercel Speed Insights
      </p>
    </main>
  )
}
