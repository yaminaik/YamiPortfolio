// Small hand-drawn illustrations for each project (no screenshots needed).

function Board() {
  return (
    <svg viewBox="0 0 320 220" className="art-svg" aria-hidden="true">
      <rect x="40" y="30" width="200" height="160" rx="10" fill="#1E3A2E" />
      <rect x="62" y="50" width="120" height="90" rx="4" fill="#0E1A14" />
      <text x="72" y="74" fill="#FF6B6B" fontFamily="IBM Plex Mono, monospace" fontSize="11">WARNING !!</text>
      <text x="72" y="92" fill="#E9F7EF" fontFamily="IBM Plex Mono, monospace" fontSize="9">low breath in 10s</text>
      <polyline points="72,124 86,124 92,108 98,130 104,118 112,124 128,124 134,110 140,128 146,124 172,124" fill="none" stroke="#22D3C5" strokeWidth="2" />
      <rect x="196" y="56" width="30" height="30" rx="3" fill="#2B2B33" />
      <circle cx="211" cy="160" r="9" fill="#3A5A4A" stroke="#7FB59A" />
      <circle cx="74" cy="164" r="5" fill="#FFB020" />
      <circle cx="92" cy="164" r="5" fill="#FF5A5F" />
      {[...Array(10)].map((_, i) => <rect key={i} x={50 + i * 18} y="36" width="8" height="5" fill="#C9A94E" />)}
      <path d="M240 110 C 262 110, 262 150, 282 150" stroke="#8C8C99" strokeWidth="3" fill="none" />
      <rect x="272" y="136" width="28" height="28" rx="5" fill="#F2F2F7" stroke="#B9B9C6" />
      <text x="276" y="154" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555">SHT40</text>
    </svg>
  )
}

function ResNet() {
  const blocks = [
    { ch: 64, n: 2 }, { ch: 128, n: 1 }, { ch: 256, n: 1 }, { ch: 512, n: 1 },
  ]
  return (
    <div className="art-resnet" aria-hidden="true">
      <div className="art-resnet__row">
        <span className="art-resnet__io">32×32 image</span>
        {blocks.map((b, i) => (
          <div key={i} className="art-resnet__stage">
            {[...Array(b.n)].map((_, j) => (
              <span key={j} className="art-resnet__block" style={{ height: 28 + i * 22 }} />
            ))}
            <span className="art-resnet__ch">{b.ch}</span>
          </div>
        ))}
        <span className="art-resnet__io">10 classes</span>
      </div>
      <div className="art-resnet__meter">
        <div><span>Parameters</span><b>4.98M of 5M budget</b></div>
        <span className="bar"><i style={{ width: '99.6%' }} /></span>
        <div><span>Validation accuracy</span><b>~88%</b></div>
        <span className="bar"><i style={{ width: '88%' }} /></span>
      </div>
    </div>
  )
}

function Satellite() {
  const boxes = [
    [18, 22, 40, 30], [70, 18, 30, 36], [120, 30, 46, 26], [190, 16, 34, 34], [240, 26, 40, 30],
    [24, 92, 36, 40], [84, 100, 50, 28], [156, 88, 30, 42], [204, 96, 44, 32], [262, 92, 32, 38],
    [30, 160, 44, 30], [96, 158, 32, 36], [150, 166, 48, 26], [222, 156, 36, 36],
  ]
  return (
    <svg viewBox="0 0 310 210" className="art-svg art-sat" aria-hidden="true">
      <rect width="310" height="210" rx="12" fill="#5C6B4E" />
      <path d="M0 70 H310 M0 142 H310 M110 0 V210" stroke="#C8C2B0" strokeWidth="8" />
      {boxes.map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill="#B7AFA0" />
          <rect x={x} y={y} width={w} height={h} fill="rgba(34,211,197,.28)" stroke="#22D3C5" strokeWidth="2" />
        </g>
      ))}
    </svg>
  )
}

function Pace() {
  const tasks = [
    ['Initial assessment', 'Completed', 'done'],
    ['Eligibility review', 'In progress', 'prog'],
    ['Discharge planning', 'Pending', 'pend'],
  ]
  return (
    <div className="art-card art-pace" aria-hidden="true">
      <div className="art-pace__head">
        <div><b>Patient, Room 214</b><span>Care team: 3 staff</span></div>
        <div className="art-pace__tags"><em>Algorithm A</em><em>Algorithm B</em></div>
      </div>
      <div className="art-pace__los">
        <div><span>Length of stay</span><b>9 days</b></div>
        <div><span>Expected</span><b>6 days</b></div>
        <div className="is-over"><span>Over by</span><b>3 days</b></div>
      </div>
      {tasks.map(([t, label, k]) => (
        <div className="art-task" key={t}><span>{t}</span><em className={`status status--${k}`}>{label}</em></div>
      ))}
      <span className="art-pace__btn">View tasks</span>
      <small>Illustration only, not real data</small>
    </div>
  )
}

function FurBaby() {
  return (
    <div className="art-card" aria-hidden="true">
      <div className="art-job">
        <span className="art-job__pet">
          <svg viewBox="0 0 32 32"><circle cx="16" cy="19" r="8" /><circle cx="8" cy="10" r="3.4" /><circle cx="14" cy="6.5" r="3.4" /><circle cx="20" cy="6.5" r="3.4" /><circle cx="25" cy="11" r="3.4" /></svg>
        </span>
        <div><b>Weekend walks for Bruno</b><span>Golden retriever, Brooklyn</span></div>
      </div>
      <div className="art-job__row"><strong>$25 per walk</strong><span className="art-job__apply">Apply</span></div>
      <div className="art-job__note">3 sitters applied. You accepted Priya.</div>
    </div>
  )
}

const MAP = { breath: Board, resnet: ResNet, satellite: Satellite, pace: Pace, furbaby: FurBaby }

export default function Art({ kind }) {
  const C = MAP[kind]
  return <div className={`art art--${kind}`}>{C ? <C /> : null}</div>
}