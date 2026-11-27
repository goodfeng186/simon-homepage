export function AvicLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 44" className={className} fill="none" aria-label="AVIC 中航工业">
      <path d="M8 32L22 10L36 32H27L22 23L17 32H8Z" fill="#0066B3" />
      <path d="M18 28L28 14L38 28" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
      <text x="46" y="23" fill="currentColor" fontSize="15" fontWeight="700" fontFamily="sans-serif">
        中航工业
      </text>
      <text x="46" y="36" fill="#94A3B8" fontSize="9.5" fontWeight="600" letterSpacing="1.6" fontFamily="monospace">
        AVIC GROUP
      </text>
    </svg>
  );
}

export function FoxconnLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 44" className={className} fill="none" aria-label="Foxconn 富士康">
      <rect x="6" y="10" width="26" height="24" rx="5" fill="#005BAC" />
      <path d="M13 28V16H25M13 22H22" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <text x="40" y="23" fill="currentColor" fontSize="15" fontWeight="700" fontFamily="sans-serif">
        FOXCONN
      </text>
      <text x="40" y="36" fill="#94A3B8" fontSize="9.5" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">
        富士康科技集团
      </text>
    </svg>
  );
}

export function PhilipsLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 44" className={className} fill="none" aria-label="Philips 飞利浦">
      <circle cx="20" cy="22" r="13" fill="#0B5ED7" />
      <path d="M11 20C16 17 24 17 29 20M12 25C17 22 23 22 28 25" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <text x="41" y="24" fill="currentColor" fontSize="15" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">
        PHILIPS
      </text>
      <text x="41" y="36" fill="#94A3B8" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
        飞利浦 · 欧洲驻厂
      </text>
    </svg>
  );
}

export function LuxshareLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 190 44" className={className} fill="none" aria-label="Luxshare 立讯精密">
      <path d="M8 12H16V28H30V33H8V12Z" fill="#0EA5E9" />
      <circle cx="26" cy="16" r="4" fill="#F59E0B" />
      <text x="38" y="23" fill="currentColor" fontSize="14.5" fontWeight="700" fontFamily="sans-serif">
        LUXSHARE
      </text>
      <text x="38" y="36" fill="#94A3B8" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
        立讯精密 · 通信供应链
      </text>
    </svg>
  );
}

export function DouyinIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-label="抖音">
      <rect width="36" height="36" rx="10" fill="#111827" />
      <path
        d="M21 9v11.5a4.5 4.5 0 1 1-3.5-4.4"
        stroke="#22D3EE"
        strokeWidth="2.6"
        strokeLinecap="round"
        transform="translate(-1,-0.5)"
      />
      <path
        d="M21 9c1.2 2.4 3.4 3.8 6 4v3.2c-2.3-.1-4.4-.9-6-2.2v6.5a4.5 4.5 0 1 1-3.5-4.4"
        stroke="#FB7185"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XiaohongshuIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-label="小红书">
      <rect width="36" height="36" rx="10" fill="#FF2442" />
      <text
        x="18"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="800"
        fontFamily="sans-serif"
      >
        RED
      </text>
    </svg>
  );
}

export function WeChatChannelsIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-label="微信视频号">
      <rect width="36" height="36" rx="10" fill="#F59E0B" />
      <path
        d="M18 10c-4.4 0-8 3.2-8 7.2 0 2.2 1.1 4.2 2.9 5.5L12 26l3.4-1.5c.8.2 1.7.3 2.6.3 4.4 0 8-3.2 8-7.2S22.4 10 18 10z"
        fill="white"
      />
      <polygon points="16.5,14.5 21.5,17.2 16.5,20" fill="#F59E0B" />
    </svg>
  );
}
