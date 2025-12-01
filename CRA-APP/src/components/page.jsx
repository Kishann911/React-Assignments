import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)'
    }}>
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: '3rem 2.5rem',
        maxWidth: '420px',
        width: '100%',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-light)',
        animation: 'fadeIn 0.6s ease-out'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0
            }}>
              Counter App
            </h1>
          </div>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            margin: 0,
            fontWeight: '400'
          }}>
            Minimal. Elegant. Simple.
          </p>
        </div>

        {/* Counter Display */}
        <div style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          marginBottom: '2rem',
          border: '1px solid var(--border-light)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
            opacity: '0.3',
            pointerEvents: 'none'
          }} />
          
          <div style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-tertiary)',
            fontWeight: '500',
            marginBottom: '0.75rem'
          }}>
            Current Count
          </div>
          
          <div style={{
            fontSize: '4rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1',
            letterSpacing: '-0.02em',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: count !== 0 ? 'slideUp 0.3s ease-out' : 'none'
          }}>
            {count}
          </div>
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              flex: '1',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-medium)',
              fontSize: '1.25rem',
              padding: '0.75rem',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--bg-secondary)'}
          >
            −
          </button>
          
          <button
            onClick={() => setCount(0)}
            style={{
              flex: '1.5',
              background: 'var(--bg-secondary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-medium)',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--bg-secondary)'}
          >
            Reset
          </button>
          
          <button
            onClick={() => setCount(count + 1)}
            style={{
              flex: '1',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
              color: 'white',
              border: 'none',
              fontSize: '1.25rem',
              padding: '0.75rem',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
            }}
          >
            +
          </button>
        </div>

        {/* Footer */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '0.8rem',
            margin: 0,
            fontWeight: '400'
          }}>
            Built with React + Vite ⚡
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;