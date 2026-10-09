// Purpose-made abstract illustrations, not fabricated screenshots of finished products.
// Replace with genuine project screenshots whenever those become available.
export function HomeArtwork({ slug }: { slug: string }) {
  if (slug === "go-reloaded") {
    return (
      <div className="enyo-art enyo-art-terminal" aria-hidden="true">
        <div className="enyo-art-terminal-window">
          <div className="enyo-art-chrome"><i/><i/><i/><span>go-reloaded · terminal</span></div>
          <div className="enyo-terminal-code"><span>$ go run . input.txt</span><strong>HELLO, WORLD!</strong><span>→ transformation complete</span><small>text processing / go</small></div>
        </div>
        <div className="enyo-art-orbit" />
      </div>
    );
  }
  if (slug === "portfolio-website") {
    return (
      <div className="enyo-art enyo-art-portfolio" aria-hidden="true">
        <div className="enyo-art-browser">
          <div className="enyo-art-chrome"><i/><i/><i/><span>portfolio / in progress</span></div>
          <div className="enyo-art-preview">
            <div><span className="enyo-art-label">ENYO</span><b>Building<br/>what matters.</b><em/></div>
            <div className="enyo-art-preview-figure"/>
          </div>
        </div>
      </div>
    );
  }
  if (slug === "ai-study-companion") {
    return (
      <div className="enyo-art enyo-art-study" aria-hidden="true">
        <div className="enyo-art-study-grid"/>
        <div className="enyo-study-panel">
          <span>STUDY SESSION</span>
          <strong>Learn. Review.<br/>Remember.</strong>
          <div className="enyo-study-bar"><i/></div>
          <div className="enyo-study-pills"><span>Recall</span><span>Practice</span></div>
        </div>
        <div className="enyo-study-float">✦</div>
      </div>
    );
  }
  return (
    <div className="enyo-art enyo-art-ascii" aria-hidden="true">
      <div className="enyo-art-ascii-lines"/>
      <span className="enyo-art-ascii-title">ASCII</span>
      <span className="enyo-art-ascii-caption">characters → visual output</span>
      <div className="enyo-art-ascii-block"># # # # # # #<br/># &nbsp;&nbsp;# &nbsp;# &nbsp;&nbsp;#<br/># # # # # # #</div>
    </div>
  );
}
