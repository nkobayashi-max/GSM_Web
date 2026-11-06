import { useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Instagram,
  Linkedin,
  GraduationCap,
  Menu,
  MessageCircle,
  Sparkles,
  Target,
  UsersRound,
  Video,
  X,
} from 'lucide-react';

const navItems = [
  { label: '私たちについて', href: '#about' },
  { label: '研修プログラム', href: '#programs' },
  { label: '実績・事例', href: '#results' },
  { label: '会社情報', href: '#company' },
  { label: 'キャリア', href: '#career' },
];

const programs = [
  {
    number: '01',
    icon: Sparkles,
    title: 'SNSマーケティング基礎',
    description:
      'SNSの役割から企画、投稿、分析まで。明日から使える運用の基本を、実例を交えながら体系的に学びます。',
    points: ['SNS戦略のつくり方', 'ユーザーに届く企画設計', '数字から改善する方法'],
  },
  {
    number: '02',
    icon: Target,
    title: '実践コンテンツ制作',
    description:
      '見る人の心を動かすコンテンツを、実際につくりながら習得。撮影・コピー・動画編集まで伴走します。',
    points: ['伝わる企画と構成', 'スマホでできる撮影術', 'ショート動画の編集演習'],
  },
  {
    number: '03',
    icon: BarChart3,
    title: '成果につなげる分析研修',
    description:
      '感覚に頼らない運用へ。アカウントの状態を読み解き、次の一手を決めるための分析力を身につけます。',
    points: ['見るべきKPIの選び方', 'レポートの読み解き方', '改善アクションの設計'],
  },
];

const results = [
  { value: '3.8', unit: '倍', label: '投稿リーチ数が向上' },
  { value: '92', unit: '%', label: '研修満足度' },
  { value: '180', unit: '社', label: '支援・研修実績' },
];

const companyFeatures = [
  {
    number: '01',
    icon: GraduationCap,
    title: '無料で学べるSNSスクール',
    description: 'AI、SNS運用、Webマーケティング、企画開発、制作など、「やりたい」を叶えるためのスキルを、オーダーメイド研修で身につけられます。',
  },
  {
    number: '02',
    icon: BriefcaseBusiness,
    title: '副業・独立を徹底サポート',
    description: 'SNSやセールスを学び、給与以外の収入源を複数つくる。副業アカウントの開設から、売れ続ける仕組みづくりまで支援します。',
  },
  {
    number: '03',
    icon: UsersRound,
    title: '一人ひとりに寄り添う環境',
    description: '複数の講師と相談できるコミュニティを用意。いつでも質問できるから、初心者でも安心して実践を続けられます。',
  },
];

const careerPaths = ['SNSマーケター', 'クリエイター', '研修講師', '人事', '運営'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lumen Social Academy トップへ">
          <span className="brand-mark"><span /><span /><span /><span /></span>
          <span className="brand-name">Lumen<span>Social</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>相談する <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" type="button" aria-label="メニューを開く" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> SOCIAL GROWTH PARTNER</p>
            <h1>伝える力を、<br /><em>未来を動かす力</em>へ。</h1>
            <p className="hero-lead">SNSマーケティングを学び、<br className="mobile-break" />自分と組織の可能性をひらく。</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programs">研修プログラムを見る <ArrowDown size={18} /></a>
              <a className="text-link" href="#about">Lumen Socialについて <ChevronRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="hero-image-wrap">
              <div className="image-placeholder hero-placeholder" role="img" aria-label="チームで学び、挑戦するメンバーの画像を入れる"><span>画像を入れる</span><small>チームで学び、挑戦するメンバー</small></div>
              <div className="image-note"><span>01</span><p>LEARN<br /><strong>→</strong> CREATE</p></div>
            </div>
            <div className="hero-sticker">GROW<br /><span>TOGETHER</span></div>
          </div>
          <div className="hero-scroll"><span>SCROLL</span><span className="scroll-line" /></div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-kicker">ABOUT US <span>01</span></div>
          <div className="intro-grid">
            <div>
              <h2>学ぶことは、<br /><span>変わること。</span></h2>
              <p className="large-copy">私たちは、SNSを「発信の場所」ではなく、「人と人が出会い、行動が生まれる場所」だと考えています。</p>
            </div>
            <div className="intro-body">
              <p>だからこそ、知識だけを渡す研修はしません。現場で使える考え方とスキルを、手を動かしながら身につける。自分の言葉で伝え、数字を読み、仲間と挑戦する。</p>
              <p>一人ひとりの変化が、チームの変化になり、会社の未来をつくっていく。Lumen Socialは、その最初の一歩から伴走します。</p>
              <a className="circle-link" href="#company" aria-label="会社情報を見る"><ArrowUpRight size={20} /></a>
            </div>
          </div>
          <div className="about-image-card"><div className="image-placeholder about-placeholder" role="img" aria-label="研修メンバーが笑顔で集まっている様子の画像を入れる"><span>画像を入れる</span><small>研修メンバーが笑顔で集まっている様子</small></div><div className="card-label">PEOPLE<br /><span>POWERED</span></div></div>
        </section>

        <section className="program-section" id="programs">
          <div className="section-heading">
            <div className="section-kicker">OUR PROGRAMS <span>02</span></div>
            <h2>実践から学ぶ、<br /><span>3つのプログラム。</span></h2>
            <p>SNSを仕事に活かすために必要な力を、目的や課題に合わせて組み合わせます。</p>
          </div>
          <div className="program-list">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article className="program-card" key={program.number}>
                  <div className="program-top"><span className="program-number">{program.number}</span><Icon size={26} strokeWidth={1.5} /></div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <ul>{program.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul>
                  <span className="program-arrow"><ArrowUpRight size={20} /></span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="career-section" id="career">
          <div className="section-kicker">WHY LUMEN SOCIAL <span>03</span></div>
          <div className="career-intro">
            <h2>学びの先に、<br /><span>選べる未来を。</span></h2>
            <p>入社後は、新人研修から実務サポートまで一人ひとりに合わせて伴走します。SNSマーケターになるためだけではなく、売れる仕組みづくりやAI活用、副業・独立まで、次のキャリアを一緒に描きます。</p>
          </div>
          <div className="feature-grid">
            {companyFeatures.map((feature) => {
              const Icon = feature.icon;
              return <article className="feature-card" key={feature.number}><div className="feature-card-top"><span className="feature-card-number">FEATURE {feature.number}</span><Icon size={28} strokeWidth={1.5} /></div><h3>{feature.title}</h3><p>{feature.description}</p></article>;
            })}
          </div>
          <div className="support-panel">
            <div><h3>入社後の流れは、<br /><span>一人で抱えない。</span></h3><p>マンツーマンSNS研修と複数の講師によるサポートで、未経験から実践へ進めます。</p></div>
            <div className="support-items"><div className="support-item"><GraduationCap size={21} />新人研修＆サポート</div><div className="support-item"><Video size={21} />マンツーマンSNS研修</div><div className="support-item"><UsersRound size={21} />MBTIバディ制度</div><div className="support-item"><BriefcaseBusiness size={21} />キャリア支援</div></div>
          </div>
          <div className="career-paths"><h3>選べるキャリア</h3><ul className="path-list">{careerPaths.map((path) => <li key={path}>{path}</li>)}</ul></div>
        </section>

        <section className="results-section" id="results">
          <div className="results-image"><div className="image-placeholder results-placeholder" role="img" aria-label="SNSコンテンツを制作する様子の画像を入れる"><span>画像を入れる</span><small>SNSコンテンツを制作する様子</small></div><div className="results-caption">CASE STUDY<br /><strong>変化は、数字に表れる。</strong></div></div>
          <div className="results-content">
            <div className="section-kicker">OUR RESULTS <span>04</span></div>
            <h2>学んで終わりじゃない。<br /><span>成果まで、並走する。</span></h2>
            <p>研修後の運用サポートや定例会もご用意。現場での実践と振り返りを繰り返すことで、学びを確かな成果へ変えていきます。</p>
            <div className="stats-grid">{results.map((result) => <div className="stat" key={result.label}><strong>{result.value}<small>{result.unit}</small></strong><span>{result.label}</span></div>)}</div>
            <a className="button button-outline" href="#contact">事例について聞く <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="company-section" id="company">
          <div className="company-overlay" />
          <div className="image-placeholder company-placeholder" role="img" aria-label="未来へつながる街の景色の画像を入れる"><span>画像を入れる</span><small>未来へつながる街の景色</small></div>
          <div className="company-content"><div className="section-kicker light">COMPANY <span>05</span></div><h2>あなたの挑戦に、<br /><em>火を灯す。</em></h2><p>株式会社ルーメンソーシャル</p><div className="company-meta"><span>代表</span> 山田 恒一 <span>所在地</span> 東京都渋谷区</div><a className="text-link light-link" href="#contact">会社情報を見る <ChevronRight size={16} /></a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy"><div className="section-kicker">CONTACT <span>06</span></div><h2>まずは、話すことから。<br /><span>お気軽にご相談ください。</span></h2><p>研修内容、料金、導入までの流れなど、どんなことでもお聞かせください。2営業日以内に担当者よりご連絡します。</p><div className="contact-details"><a href="mailto:hello@lumen-social.jp"><MessageCircle size={18} /> hello@lumen-social.jp</a><span>平日 10:00 - 18:00</span></div></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? <div className="form-success"><Check size={32} /><h3>お問い合わせありがとうございます。</h3><p>内容を確認のうえ、担当者よりご連絡します。</p><button type="button" onClick={() => setSubmitted(false)}>フォームに戻る</button></div> : <>
              <label>お名前<input required type="text" placeholder="山田 太郎" /></label>
              <label>メールアドレス<input required type="email" placeholder="hello@example.com" /></label>
              <label>ご相談内容<textarea required rows={3} placeholder="研修について相談したい"></textarea></label>
              <button className="button button-primary form-button" type="submit">相談内容を送信する <ArrowUpRight size={18} /></button>
            </>}
          </form>
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark"><span /><span /><span /><span /></span><span className="brand-name">Lumen<span>Social</span></span></a><div className="footer-links"><a href="#about">私たちについて</a><a href="#programs">研修プログラム</a><a href="#results">実績・事例</a><a href="#contact">お問い合わせ</a></div><div className="social-links"><a href="#top" aria-label="Instagram"><Instagram size={18} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={18} /></a></div><p>© 2026 Lumen Social Inc.</p></footer>
    </div>
  );
}

export default App;
