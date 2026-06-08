
 // ── CREATE GAME WIZARD (12 steps) ──
    var NUM_CG_SLIDES = 10;
    window.cgGoTo = function(n) {
      for (var i = 0; i < NUM_CG_SLIDES; i++) {
        var s = document.getElementById('cgslide-' + i);
        var t = document.querySelectorAll('#cgTabs .wstep')[i];
        if (s) s.classList.toggle('active', i === n);
        if (t) t.classList.toggle('active', i === n);
      }
      for (var i = 0; i < NUM_CG_SLIDES; i++) {
        var dc = document.getElementById('cgdots-' + i);
        if (!dc) continue;
        dc.innerHTML = '';
        for (var j = 0; j < NUM_CG_SLIDES; j++) {
          var d = document.createElement('div');
          d.className = 'wdot' + (j === n ? ' active' : '');
          dc.appendChild(d);
        }
      }
      var tabs = document.querySelectorAll('#cgTabs .wstep');
      if (tabs[n]) {
        tabs[n].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    };
// ── GAME TYPE DATA ──
    var GT_DATA = {
      '321milo': {
        name: '321 Milo',
        img3:  'images/321_milo_image/321MiloCreateGame.png',
        img4:  'images/321_milo_image/321MiloSetMatchDetails.png',
        img5:  'images/321_milo_image/321MiloSetPerMatchHoles.png',
        img6:  'images/321_milo_image/321MiloSetAmountforEach.png',
        img7:  'images/321_milo_image/321MiloSetPoints.png',
        img8:  'images/321_milo_image/321MiloGameCreatedSuccessfully.png',
        img9:  'images/321_milo_image/321MiloGameOverview.png',
        img10:  'images/321_milo_image/321MiloAddBetsScreen.png',
        img11:  'images/321_milo_image/321MiloAllPlayersResult.png',
        img12:  'images/321_milo_image/321MiloFoursomeTab.png',
        img13:  'images/321_milo_image/321MiloFoursomeScorecard.png',
        img14:  'images/321_milo_image/321MiloFoursomeWinners.png',
        img15:  'images/321_milo_image/321MiloLedgerPageView.png',
        playTypeBadges: [
          {label:'COD ✓',active:true},{label:'2v2 Teams',active:true},{label:'Random',active:true},
          {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},
          {label:'1v1',active:false},{label:'Individual',active:false},{label:'Modified Stableford',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                     <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                       <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                       <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                     </div>
                                     <div style="display:flex;gap:8px;flex-wrap:wrap">
                                       <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                         <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                         <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                         <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                       </div>
                                     </div>
                                     <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                      <br/>
                                     <div style="display:flex;gap:8px">
                                       <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                         <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">3 Holes</div>
                                         <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Per Match</div>
                                       </div>
                                       <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                         <div style="font-size:.85rem;font-weight:800;color:#15803d">6 Holes</div>
                                         <div style="font-size:.68rem;color:#166534;margin-top:2px">Per Match</div>
                                         <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                       </div>
                                     </div>
                                   </div>`,
        amountForEach:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                         <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                           <div>
                                             <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                               <i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i>
                                               <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span>
                                               <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                             </div>
                                             <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The wager amount applied to each match played. A default value is pre-filled — update if needed.</p>
                                           </div>
                                           <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                             <div style="font-size:1.1rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">$3.00</div>
                                             <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">per match</div>
                                           </div>
                                         </div>
                                       </div>

                                       <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                         <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                           <div>
                                             <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                               <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                               <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                               <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                             </div>
                                             <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                           </div>
                                           <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                             <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                             <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                           </div>
                                         </div>
                                       </div>

                                       <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                         <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                           <div>
                                             <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                               <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                               <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                               <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                             </div>
                                             <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                           </div>
                                           <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                             <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                             <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                           </div>
                                         </div>
                                       </div>

                                       <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                         <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                         All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                       </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                              <div>
                                                <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                  <i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i>
                                                  <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span>
                                                  <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                </div>
                                                <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning a single hole</strong>. Pre-filled — edit if needed.</p>
                                              </div>
                                              <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                <div style="font-size:1.2rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">1</div>
                                                <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / hole</div>
                                              </div>
                                            </div>
                                          </div>

                                          <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                              <div>
                                                <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                  <i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i>
                                                  <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span>
                                                  <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                </div>
                                                <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning an entire match</strong>. Pre-filled — edit if needed.</p>
                                              </div>
                                              <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                <div style="font-size:1.2rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">0</div>
                                                <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / match</div>
                                              </div>
                                            </div>
                                          </div>

                                          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                            <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                            Both fields are <strong>pre-filled with default point values</strong>. Tap any field to update before proceeding.
                                          </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 3 Options</h4>
                                <div class="action-card"><div class="action-icon"><i class="bi bi-people-fill"></i></div><div><div class="action-title">1. Add Across Foursome Team</div><div class="action-desc">Create or select Across Foursome Teams for the game. Teams are formed based on the selected tee sheet. Use existing teams or create new ones.</div></div></div>
                                <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">2. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">3. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>321 Milo</strong> — available play types: <strong>COD</strong>, <strong>2v2 Teams</strong>, <strong>Random</strong>. Currently selected: <strong>COD</strong>.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for this game type.</span>',
        holesDetail: '<div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">3 Holes</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Per Match</div></div><div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">6 Holes</div><div style="font-size:.68rem;color:#166534;margin-top:2px">Per Match</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Wager amount per match. Pre-filled — update if needed.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$3.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per match</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side rewards. Pre-filled.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Junk side rewards. Pre-filled.</p></div><div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#7c3aed">$2.00</div><div style="font-size:.6rem;color:#7c3aed;font-weight:600;text-transform:uppercase">pool total</div></div></div></div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points for winning a single hole. Pre-filled.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / hole</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points for winning an entire match. Pre-filled.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:var(--accent)">0</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pt / match</div></div></div></div>',
      /* add score flow */
      addScoreTitle1:`Enter player scores across the 18-hole grid — 12 steps.`,
      addScoreTitle2:`Score Entry Flow — 12 Steps`,
      addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-shuffle"></i></span></div><div class="wstep-label">Generate Matches</div></div>
                                <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-diagram-2"></i></span></div><div class="wstep-label">Match Config</div></div>
                                <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-gear"></i></span></div><div class="wstep-label">Foursome Setting</div></div>
                                <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                <div class="wstep" onclick="asGoTo(9)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                <div class="wstep" onclick="asGoTo(10)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                <div class="wstep" onclick="asGoTo(11)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                              </div>`,
      showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">01</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Select Foursome</div>
                                               <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed. The foursome flow starts from <strong>Select Cart &amp; Driver</strong>, so tap on it to begin.</div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321MiloSelectFoursome.png" alt="Select Foursome" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <span></span>
                                             <div class="wizard-progress-dots" id="asdots-0"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Generate Matches</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-1">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">02</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Generate Matches</div>
                                               <div class="wsi-desc">
                                                 You will now see the <strong>Foursome Players</strong> bottom sheet. Here you can reassign each player as a <strong>Driver</strong> or <strong>Passenger</strong> for <strong>Cart 1</strong> and <strong>Cart 2</strong>.
                                                 <div style="margin-top:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;font-size:.82rem;color:#475569;line-height:1.6">
                                                   Once you've set the cart assignments, tap <strong>Generate Matches</strong> to automatically create the foursome match pairings based on your selection.
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-shuffle"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321MiloFoursomePlayers.png" alt="Foursome Players — Generate Matches" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-1"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Match Config</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-2">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">03</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Match Configuration</div>
                                               <div class="wsi-desc">
                                                 After generating matches, you will see the <strong>Foursome Matches</strong> screen showing matches based on holes. The matches are displayed across <strong>6 holes</strong> per match group.
                                                 <div style="margin-top:10px;display:flex;align-items:flex-start;gap:10px;background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:10px 14px">
                                                   <i class="bi bi-info-circle" style="color:#c2751a;margin-top:2px;flex-shrink:0"></i>
                                                   <span style="font-size:.82rem;color:#475569;line-height:1.6">Review the match configuration showing 6-hole matches, then tap <strong>Done</strong> to confirm and proceed to the next step.</span>
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-diagram-2"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321MiloMatchConfiguration.png" alt="Match Configuration" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-2"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Foursome Setting</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-3">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">04</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Add Foursome Setting</div>
                                               <div class="wsi-desc">
                                                 You are back on the <strong>Select Foursome</strong> screen showing your progress. The first two steps are now complete:
                                                 <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                   <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                     <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 1. Select Cart &amp; Driver
                                                   </div>
                                                   <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                     <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 2. Generate Matches
                                                   </div>
                                                   <div style="display:flex;align-items:center;gap:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:700">
                                                     <i class="bi bi-arrow-right-circle-fill" style="color:#2563eb"></i> 3. Add Foursome Setting &nbsp;<span style="font-weight:400;color:#475569">— tap this to continue</span>
                                                   </div>
                                                 </div>
                                               </div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-gear"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321MiloSelectFoursomeProgress.png" alt="Select Foursome Progress" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-3"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-4">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">05</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                               <div class="wsi-desc">
                                                 A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                 <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                   <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                     <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                   </div>
                                                   <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                     <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                   </div>
                                                   <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                     <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                   </div>
                                                 </div>
                                                 <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                               </div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321MiloFoursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-4"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-5">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">06</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Tap Add Score</div>
                                               <div class="wsi-desc">After completing the Foursome Settings, tap the <strong>Add Score</strong> button to continue to the 18-hole score entry grid.</div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321_milo_image/321MiloTapAddScore.png" alt="Tap Add Score" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-5"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-6">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">07</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">18-Hole Score Grid</div>
                                               <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/321_milo_image/321Milo-18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-6"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-7">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">08</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                               <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-7"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Skode &amp; Junk</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-8">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">09</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                               <div class="wsi-desc">
                                                 After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                 <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                   <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                     <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                       <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                       <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                       <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                     </div>
                                                     <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                       Tap the <strong>accordion</strong> to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                     </div>
                                                   </div>

                                                   <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                     <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                       <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                       <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                       <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                     </div>
                                                     <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                       Tap on any category — <strong>Skode</strong>, <strong>Junk</strong> — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                     </div>
                                                   </div>

                                                   <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                     <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                       <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                       <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                       <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                     </div>
                                                     <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                       In the pop-up, assign the reward based on the outcome:
                                                       <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                         <div style="display:flex;align-items:center;gap:8px">
                                                           <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                           <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                         </div>
                                                         <div style="display:flex;align-items:center;gap:8px">
                                                           <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                           <span>Player attempted but did not meet the reward condition.</span>
                                                         </div>
                                                         <div style="display:flex;align-items:center;gap:8px">
                                                           <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                           <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                         </div>
                                                       </div>
                                                     </div>
                                                   </div>

                                                   <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                     <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                       <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                       <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                       <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                     </div>
                                                     <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                       Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                     </div>
                                                   </div>

                                                 </div>
                                               </div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-8"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(9)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-9">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">10</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">Leaderboard</div>
                                               <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(8)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-9"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(10)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-10">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">11</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">View Results Tab</div>
                                               <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(9)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-10"></div>
                                             <button class="wizard-nav-btn primary" onclick="asGoTo(11)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                           </div>
                                         </div>

                                         <div class="wizard-slide" id="asslide-11">
                                           <div class="wizard-slide-info">
                                             <div class="wsi-num">12</div>
                                             <div class="wsi-body">
                                               <div class="wsi-title">All Holes Score Added</div>
                                               <div class="wsi-desc">
                                                 Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                 <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                   <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                     <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                     <div>
                                                       <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                       <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                     </div>
                                                   </div>

                                                   <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                     <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                     <div>
                                                       <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                       <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                     </div>
                                                   </div>

                                                   <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                     <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                     <div>
                                                       <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                       <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                     </div>
                                                   </div>

                                                 </div>
                                               </div>
                                             </div>
                                             <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                           </div>
                                           <div class="wizard-slide-img"><div class="image-placeholder">
                                             <img src="images/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                           </div></div>
                                           <div class="wizard-nav">
                                             <button class="wizard-nav-btn" onclick="asGoTo(10)"><i class="bi bi-arrow-left"></i> Back</button>
                                             <div class="wizard-progress-dots" id="asdots-11"></div>
                                             <span style="font-size:.8rem;color:var(--ink-faint)">&#10003; Scoring Complete!</span>
                                           </div>
                                         </div>`
      },
      'calcutta': {
        name: 'Calcutta',
        img3:  'images/321_milo_image/321MiloCreateGame.png',
        img4:  'images/321MiloSetAmountforEach.png',
        img5:  'images/321MiloSetPerMatchHoles.png',
        img6:  'images/321MiloSetAmountforEach.png',
        img8:  'images/321MiloSetAmountforEach.png',
        img7:  'images/321MiloSetPoints.png',
        img9:  'images/321MiloGameCreatedSuccessfully.png',
        img10:  'images/321MiloAddBetsScreen.png',
        img11:  'images/321_milo_image/321MiloAllPlayersResult.png',
        img12:  'images/321_milo_image/321MiloAddBetsScreen.png',
        img13:  'images/321_milo_image/321MiloAddBetsScreen.png',
        img14:  'images/321_milo_image/321MiloAddBetsScreen.png',
        img15:  'images/321_milo_image/321MiloAddBetsScreen.png',
        playTypeBadges: [
          {label:'Individual ✓',active:true},{label:'1v1',active:false},{label:'Cards',active:false},
          {label:'COD',active:false},{label:'2v2 Teams',active:false},{label:'Random',active:false},
          {label:'Ultra Vegas',active:false},{label:'4 Man Teams',active:false},{label:'Modified Stableford',active:false}
        ],
        holesDesc:'',
        amountForEach:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The wager amount applied to each match played. A default value is pre-filled — update if needed.</p>
                                                   </div>
                                                   <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">$3.00</div>
                                                     <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">per match</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                      <div>
                                                        <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                          <i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span>
                                                          <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                        </div>
                                                        <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning a single hole</strong>. Pre-filled — edit if needed.</p>
                                                      </div>
                                                      <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                        <div style="font-size:1.2rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">1</div>
                                                        <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / hole</div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                      <div>
                                                        <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                          <i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span>
                                                          <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                        </div>
                                                        <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning an entire match</strong>. Pre-filled — edit if needed.</p>
                                                      </div>
                                                      <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                        <div style="font-size:1.2rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">0</div>
                                                        <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / match</div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    Both fields are <strong>pre-filled with default point values</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:``,
        gameCreatedFooter :``,
        playTypeNote: '<strong>Calcutta</strong> — available play types: <strong>Individual</strong>, <strong>1v1</strong>, <strong>Cards</strong>. Auction-based team bidding with full 18-hole scoring.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Calcutta.</span>',
        holesDetail: '<div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Back 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 10–18</div></div><div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Auction Buy-in</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Per-player buy-in for the Calcutta auction pool. All bids fund the prize pool.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$10.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">buy-in</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Side pool for Junk rewards during round play.</p></div><div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#7c3aed">$2.00</div><div style="font-size:.6rem;color:#7c3aed;font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#c2751a;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Calcutta uses an <strong>auction buy-in</strong> model. The prize pool is formed from all bids placed during the auction round.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded per hole won. Calcutta uses standard stroke-play scoring.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / hole</div></div></div></div><div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>In Calcutta, the <strong>prize pool payout</strong> is determined by auction bids — points track performance but the money follows the auction structure.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 12 steps.`,
            addScoreTitle2:`Score Entry Flow — 9 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                            <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                            <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-shuffle"></i></span></div><div class="wstep-label">Generate Matches</div></div>
                                            <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-diagram-2"></i></span></div><div class="wstep-label">Match Config</div></div>
                                            <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-gear"></i></span></div><div class="wstep-label">Foursome Setting</div></div>
                                            <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                            <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                            <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                            <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                            <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                            <div class="wstep" onclick="asGoTo(9)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                            <div class="wstep" onclick="asGoTo(10)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                            <div class="wstep" onclick="asGoTo(11)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                          </div>`,
      },
      'progskins': {
        name: 'Progressive Skins',
        img3:  'images/progressive_skins_image/setGameNameAndGameType.png',
        img4:  'images/progressive_skins_image/setMatchDetails.png',
        img5:  'images/progressive_skins_image/setPerMatchHoles.png',
        img6:  'images/progressive_skins_image/setAmountforEach.png',
        img7:  'images/progressive_skins_image/setPoints.png',
        img8:  'images/progressive_skins_image/gameCreatedSuccessfully.png',
        img9:  'images/progressive_skins_image/gameOverview.png',
        img10:  'images/progressive_skins_image/addBetsScreen.png',
        img11:  'images/progressive_skins_image/allPlayersResult.png',
        img12:  'images/progressive_skins_image/foursomeTab.png',
        img13:  'images/progressive_skins_image/foursomeScorecard.png',
        img14:  'images/progressive_skins_image/foursomeWinners.png',
        img15:  'images/progressive_skins_image/ledgerPageView.png',
        playTypeBadges: [
          {label:'Individual ✓',active:true},{label:'Modified Stableford',active:false},
          {label:'COD',active:false},{label:'2v2 Teams',active:false},{label:'Random',active:false},
          {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},{label:'1v1',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                                          <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                                        </div>
                                                        <div style="display:flex;gap:8px;flex-wrap:wrap">
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Front 9</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">Holes 1–9</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Back 9</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">Holes 10–18</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                        </div>
                                                        <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Front 9</strong>, <strong>Back 9</strong> and <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                                      </div>`,
        amountForEach: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                        <div>
                                                          <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                            <i class="bi bi-star-fill" style="color:#2563eb;font-size:.9rem"></i>
                                                            <span style="font-size:.88rem;font-weight:700;color:var(--ink)">$ Per Skin</span>
                                                            <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                          </div>
                                                          <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                            Dollar amount awarded for each <strong>skin won during the round</strong>. Pre-filled — edit if needed.
                                                          </p>
                                                        </div>

                                                        <div style="background:#dbeafe;border:1.5px solid #2563eb;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                          <div style="font-size:1.2rem;font-weight:800;color:#2563eb;font-family:var(--font-alt)">0.50</div>
                                                          <div style="font-size:.6rem;color:#1d4ed8;font-weight:600;letter-spacing:.04em;text-transform:uppercase">
                                                            $ / skin
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    The field(s) are <strong>pre-filled with default skin value(s)</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 3 Options</h4>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-people-fill"></i></div><div><div class="action-title">1. Add Across Foursome Team</div><div class="action-desc">Create or select Across Foursome Teams for the game. Teams are formed based on the selected tee sheet. Use existing teams or create new ones.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">2. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">3. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>Progressive Skins</strong> — available play types: <strong>Individual</strong>. Skins carry over on ties until a hole is won outright.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Progressive Skins.</span>',
        holesDetail: '<div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Value</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Dollar value of each skin. If a hole is tied, the skin carries over and <strong>accumulates</strong> to the next hole.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$5.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per skin</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side events alongside the skins game.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-arrow-repeat" style="margin-right:5px"></i>In Progressive Skins, <strong>carried-over skins accumulate</strong> — a tied hole rolls its value to the next, creating big payouts when a streak is finally broken.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Win = 1 Point</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Each skin won counts as 1 point on the leaderboard. Carried-over skins still count as 1 win.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / skin</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Progressive Skins tracks wins per hole — the player with the <strong>most skins won</strong> leads the leaderboard regardless of carry-over amounts.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 9 steps.`,
            addScoreTitle2:`Score Entry Flow — 9 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                            <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                            <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                            <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                            <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                            <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                            <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                            <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                            <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                            <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                          </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/progressive_skins_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                     <div class="wsi-desc">
                                                       A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                       <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                       <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                       </div>
                                                       <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                       </div>
                                                       <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                       </div>
                                                       <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                         <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                       </div>
                                                       </div>
                                                       <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                       </div>
                                                     </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/progressive_skins_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After selecting your foursome, you will see the foursome detail screen. Tap the <strong>Add Score</strong> button to continue to foursome settings.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/progressive_skins_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/progressive_skins_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Skode & Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong>  to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>

                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong>
                                                             — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <span style="font-size:.8rem;color:var(&#45;&#45;ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`,
      },
      'regular_skins': {
        name: 'Regular Skins',
        img3:  'images/regular_skins_image/setGameNameAndGameType.png',
        img4:  'images/regular_skins_image/setMatchDetails.png',
        img5:  'images/progressive_skins_image/setPerMatchHoles.png',
        img6:  'images/progressive_skins_image/setAmountforEach.png',
        img7:  'images/regular_skins_image/setPoints.png',
        img8:  'images/regular_skins_image/gameCreatedSuccessfully.png',
        img9:  'images/regular_skins_image/gameOverview.png',
        img10:  'images/regular_skins_image/addBetsScreen.png',
        img11:  'images/regular_skins_image/allPlayersResult.png',
        img12:  'images/regular_skins_image/foursomeTab.png',
        img13:  'images/regular_skins_image/foursomeScorecard.png',
        img14:  'images/regular_skins_image/foursomeWinners.png',
        img15:  'images/regular_skins_image/ledgerPageView.png',
        playTypeBadges: [
          {label:'Individual ✓',active:true},{label:'Modified Stableford',active:false},
          {label:'COD',active:false},{label:'2v2 Teams',active:false},{label:'Random',active:false},
          {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},{label:'1v1',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                                          <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                                        </div>
                                                        <div style="display:flex;gap:8px;flex-wrap:wrap">
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Front 9</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">Holes 1–9</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Back 9</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">Holes 10–18</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                        </div>
                                                        <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Front 9</strong>, <strong>Back 9</strong> and <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                                      </div>`,
        amountForEach: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                        <div>
                                                          <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                            <i class="bi bi-star-fill" style="color:#2563eb;font-size:.9rem"></i>
                                                            <span style="font-size:.88rem;font-weight:700;color:var(--ink)">$ Per Skin</span>
                                                            <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                          </div>
                                                          <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                            Dollar amount awarded for each <strong>skin won during the round</strong>. Pre-filled — edit if needed.
                                                          </p>
                                                        </div>

                                                        <div style="background:#dbeafe;border:1.5px solid #2563eb;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                          <div style="font-size:1.2rem;font-weight:800;color:#2563eb;font-family:var(--font-alt)">1</div>
                                                          <div style="font-size:.6rem;color:#1d4ed8;font-weight:600;letter-spacing:.04em;text-transform:uppercase">
                                                            $ / skin
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    The field(s) are <strong>pre-filled with default skin value(s)</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 3 Options</h4>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-people-fill"></i></div><div><div class="action-title">1. Add Across Foursome Team</div><div class="action-desc">Create or select Across Foursome Teams for the game. Teams are formed based on the selected tee sheet. Use existing teams or create new ones.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">2. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">3. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>Regular Skins</strong> — available play types: <strong>Individual</strong>. Each hole is worth a fixed skin value, and skins do not carry over on ties.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Regular Skins.</span>',
        holesDetail: '<div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Value</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Dollar value of each skin. If a hole is tied, the skin carries over and <strong>accumulates</strong> to the next hole.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$5.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per skin</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side events alongside the skins game.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-arrow-repeat" style="margin-right:5px"></i>In Progressive Skins, <strong>carried-over skins accumulate</strong> — a tied hole rolls its value to the next, creating big payouts when a streak is finally broken.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Win = 1 Point</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Each skin won counts as 1 point on the leaderboard. Carried-over skins still count as 1 win.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / skin</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Progressive Skins tracks wins per hole — the player with the <strong>most skins won</strong> leads the leaderboard regardless of carry-over amounts.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 9 steps.`,
            addScoreTitle2:`Score Entry Flow — 9 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                            <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                            <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                            <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                            <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                            <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                            <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                            <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                            <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                            <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                          </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                   <div class="wsi-desc">
                                                     A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                     <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                     <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                     </div>
                                                     </div>
                                                     <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After selecting your foursome, you will see the foursome detail screen. Tap the <strong>Add Score</strong> button to continue to foursome settings.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Skode & Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong>  to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>

                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong>
                                                             — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <span style="font-size:.8rem;color:var(&#45;&#45;ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`,
      },
      'vegas': {
              name: 'Vegas',
              img3:  'images/vegas_image/setGameNameAndGameType.png',
              img4:  'images/vegas_image/SetMatchDetails.png',
              img5:  'images/321_milo_image/321MiloSetPerMatchHoles.png',
              img6:  'images/vegas_image/setAmountforEach.png',
              img7:  'images/vegas_image/setPoints.png',
              img8:  'images/vegas_image/gameCreatedSuccessfully.png',
              img9:  'images/vegas_image/gameOverview.png',
              img10:  'images/vegas_image/addBetsScreen.png',
              img11:  'images/vegas_image/allPlayersResult.png',
              img12:  'images/vegas_image/foursomeTab.png',
              img13:  'images/vegas_image/foursomeScorecard.png',
              img14:  'images/vegas_image/foursomeWinners.png',
              img15:  'images/vegas_image/ledgerPageView.png',
              playTypeBadges: [
                {label:'COD ✓',active:true},{label:'2v2 Teams',active:true},{label:'Random',active:false},
                {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},
                {label:'1v1',active:false},{label:'Individual',active:false},{label:'Modified Stableford',active:false}
              ],
              holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                           <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                             <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                             <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                           </div>
                                           <div style="display:flex;gap:8px;flex-wrap:wrap">
                                             <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                               <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                               <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                               <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                             </div>
                                           </div>
                                           <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                            <br/>
                                           <div style="display:flex;gap:8px">
                                             <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                               <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">3 Holes</div>
                                               <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Per Match</div>
                                             </div>
                                             <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                               <div style="font-size:.85rem;font-weight:800;color:#15803d">6 Holes</div>
                                               <div style="font-size:.68rem;color:#166534;margin-top:2px">Per Match</div>
                                               <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                             </div>
                                           </div>
                                         </div>`,
              amountForEach:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                               <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                 <div>
                                                   <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                     <i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i>
                                                     <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span>
                                                     <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                   </div>
                                                   <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The wager amount applied to each match played. A default value is pre-filled — update if needed.</p>
                                                 </div>
                                                 <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                   <div style="font-size:1.1rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">$5.00</div>
                                                   <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">per match</div>
                                                 </div>
                                               </div>
                                             </div>

                                             <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                               <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                 <div>
                                                   <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                     <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                     <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                     <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                   </div>
                                                   <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                 </div>
                                                 <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                   <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                   <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                 </div>
                                               </div>
                                             </div>

                                             <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                               <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                 <div>
                                                   <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                     <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                     <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                     <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                   </div>
                                                   <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                 </div>
                                                 <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                   <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                   <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                 </div>
                                               </div>
                                             </div>

                                             <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                               <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                               All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                             </div>`,
              setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                  <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                    <div>
                                                      <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                        <i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i>
                                                        <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span>
                                                        <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                      </div>
                                                      <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning a single hole</strong>. Pre-filled — edit if needed.</p>
                                                    </div>
                                                    <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                      <div style="font-size:1.2rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">1</div>
                                                      <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / hole</div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                  <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                    <div>
                                                      <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                        <i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i>
                                                        <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span>
                                                        <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                      </div>
                                                      <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning an entire match</strong>. Pre-filled — edit if needed.</p>
                                                    </div>
                                                    <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                      <div style="font-size:1.2rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">2</div>
                                                      <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / match</div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                  <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                  Both fields are <strong>pre-filled with default point values</strong>. Tap any field to update before proceeding.
                                                </div>`,
              gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have two options: <strong>View Game</strong> and <strong>Create Game for Another Day</strong>.`,
              gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 2 Options</h4>
                                      <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">1. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                      <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">2. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
              playTypeNote: '<strong>Vegas</strong> — available play types: <strong>COD</strong>, <strong>2v2 Teams</strong>. Currently selected: <strong>COD</strong>.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for this game type.</span>',
              holesDetail: '<div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">3 Holes</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Per Match</div></div><div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">6 Holes</div><div style="font-size:.68rem;color:#166534;margin-top:2px">Per Match</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div>',
              amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Wager amount per match. Pre-filled — update if needed.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$3.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per match</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side rewards. Pre-filled.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Junk side rewards. Pre-filled.</p></div><div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#7c3aed">$2.00</div><div style="font-size:.6rem;color:#7c3aed;font-weight:600;text-transform:uppercase">pool total</div></div></div></div>',
              pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points for winning a single hole. Pre-filled.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / hole</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points for winning an entire match. Pre-filled.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:var(--accent)">0</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pt / match</div></div></div></div>',
            /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 12 steps.`,
            addScoreTitle2:`Score Entry Flow — 12 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                      <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                      <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-shuffle"></i></span></div><div class="wstep-label">Generate Matches</div></div>
                                      <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-diagram-2"></i></span></div><div class="wstep-label">Match Config</div></div>
                                      <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-gear"></i></span></div><div class="wstep-label">Foursome Setting</div></div>
                                      <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                      <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                      <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                      <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                      <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                      <div class="wstep" onclick="asGoTo(9)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                      <div class="wstep" onclick="asGoTo(10)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                      <div class="wstep" onclick="asGoTo(11)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                    </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed. The foursome flow starts from <strong>Select Cart &amp; Driver</strong>, so tap on it to begin.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Generate Matches</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Generate Matches</div>
                                                     <div class="wsi-desc">
                                                       You will now see the <strong>Foursome Players</strong> bottom sheet. Here you can reassign each player as a <strong>Driver</strong> or <strong>Passenger</strong> for <strong>Cart 1</strong> and <strong>Cart 2</strong>.
                                                       <div style="margin-top:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;font-size:.82rem;color:#475569;line-height:1.6">
                                                         Once you've set the cart assignments, tap <strong>Generate Matches</strong> to automatically create the foursome match pairings based on your selection.
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-shuffle"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/foursomePlayers.png" alt="Foursome Players — Generate Matches" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Match Config</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Match Configuration</div>
                                                     <div class="wsi-desc">
                                                       After generating matches, you will see the <strong>Foursome Matches</strong> screen showing matches based on holes. The matches are displayed across <strong>6 holes</strong> per match group.
                                                       <div style="margin-top:10px;display:flex;align-items:flex-start;gap:10px;background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:10px 14px">
                                                         <i class="bi bi-info-circle" style="color:#c2751a;margin-top:2px;flex-shrink:0"></i>
                                                         <span style="font-size:.82rem;color:#475569;line-height:1.6">Review the match configuration showing 6-hole matches, then tap <strong>Done</strong> to confirm and proceed to the next step.</span>
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-diagram-2"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/matchConfiguration.png" alt="Match Configuration" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Foursome Setting</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Add Foursome Setting</div>
                                                     <div class="wsi-desc">
                                                       You are back on the <strong>Select Foursome</strong> screen showing your progress. The first two steps are now complete:
                                                       <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                         <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                           <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 1. Select Cart &amp; Driver
                                                         </div>
                                                         <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                           <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 2. Generate Matches
                                                         </div>
                                                         <div style="display:flex;align-items:center;gap:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:700">
                                                           <i class="bi bi-arrow-right-circle-fill" style="color:#2563eb"></i> 3. Add Foursome Setting &nbsp;<span style="font-weight:400;color:#475569">— tap this to continue</span>
                                                         </div>
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-gear"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/selectFoursomeProgress.png" alt="Select Foursome Progress" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                     <div class="wsi-desc">
                                                       A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                       <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                         <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                         </div>
                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                         </div>
                                                         <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                         </div>
                                                         <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                         </div>
                                                         <div style="background:#faf5ff;border:1px solid #d8b4fe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Basement Vegas</strong> — Enable via toggle to include Basement Winners in the game. <em>Default: Off.</em>
                                                         </div>
                                                       </div>
                                                       <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After completing the Foursome Settings, tap the <strong>Add Score</strong> button to continue to the 18-hole score entry grid.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Skode &amp; Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong> to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong> — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(9)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-9">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">10</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(8)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-9"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(10)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-10">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">11</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(9)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-10"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(11)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-11">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">12</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/vegas_image/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(10)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-11"></div>
                                                   <span style="font-size:.8rem;color:var(--ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`
            },
      'stroke_play': {
        name: 'Stroke Play',
        img3:  'images/stroke_play_image/setGameNameAndGameType.png',
        img4:  'images/regular_skins_image/setMatchDetails.png',
        img5:  'images/stroke_play_image/setPerMatchHoles.png',
        img6:  'images/progressive_skins_image/setAmountforEach.png',
        img7:  'images/stroke_play_image/setPoints.png',
        img8:  'images/stroke_play_image/gameCreatedSuccessfully.png',
        img9:  'images/stroke_play_image/gameOverview.png',
        img10:  'images/stroke_play_image/addBetsScreen.png',
        img11:  'images/stroke_play_image/allPlayersResult.png',
        img12:  'images/stroke_play_image/foursomeTab.png',
        img13:  'images/stroke_play_image/foursomeScorecard.png',
        img14:  'images/stroke_play_image/foursomeWinners.png',
        img15:  'images/stroke_play_image/ledgerPageView.png',
        playTypeBadges: [
          {label:'Individual ✓',active:true},{label:'Modified Stableford',active:false},
          {label:'COD',active:false},{label:'2v2 Teams',active:false},{label:'Random',active:false},
          {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},{label:'1v1',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                                          <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                                        </div>
                                                        <div style="display:flex;gap:8px;flex-wrap:wrap">
                                                          <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                           <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">Front 9</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Holes 1–9</div>
                                                          </div>
                                                          <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                           <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">Back 9</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Holes 10–18</div>
                                                          </div>

                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                        </div>
                                                        <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                                      </div>`,
        amountForEach: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                        <div>
                                                          <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                            <i class="bi bi-star-fill" style="color:#2563eb;font-size:.9rem"></i>
                                                            <span style="font-size:.88rem;font-weight:700;color:var(--ink)">$ Per Points</span>
                                                            <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                          </div>
                                                          <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                            Dollar amount awarded for each <strong>point won during the round</strong>. Pre-filled — edit if needed.
                                                          </p>
                                                        </div>

                                                        <div style="background:#dbeafe;border:1.5px solid #2563eb;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                          <div style="font-size:1.2rem;font-weight:800;color:#2563eb;font-family:var(--font-alt)">1</div>
                                                          <div style="font-size:.6rem;color:#1d4ed8;font-weight:600;letter-spacing:.04em;text-transform:uppercase">
                                                            $ / point
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    The field(s) are <strong>pre-filled with default point value(s)</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 2 Options</h4>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">1. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">2. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>Stroke Play</strong> — available play types: <strong>Individual</strong>. Players compete based on their total number of strokes, with the lowest score winning..<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Stroke Play.</span>',
        holesDetail: '<div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Value</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Dollar value of each skin. If a hole is tied, the skin carries over and <strong>accumulates</strong> to the next hole.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$5.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per skin</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side events alongside the skins game.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-arrow-repeat" style="margin-right:5px"></i>In Progressive Skins, <strong>carried-over skins accumulate</strong> — a tied hole rolls its value to the next, creating big payouts when a streak is finally broken.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Win = 1 Point</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Each skin won counts as 1 point on the leaderboard. Carried-over skins still count as 1 win.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / skin</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Progressive Skins tracks wins per hole — the player with the <strong>most skins won</strong> leads the leaderboard regardless of carry-over amounts.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 9 steps.`,
            addScoreTitle2:`Score Entry Flow — 9 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                            <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                            <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                            <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                            <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                            <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                            <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                            <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                            <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                            <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                          </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                   <div class="wsi-desc">
                                                     A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                     <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                     <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                     </div>
                                                     </div>
                                                     <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/stroke_play_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After selecting your foursome, you will see the foursome detail screen. Tap the <strong>Add Score</strong> button to continue to foursome settings.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/stroke_play_image/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Skode & Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong>  to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>

                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong>
                                                             — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/stroke_play_image/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <span style="font-size:.8rem;color:var(&#45;&#45;ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`,
      },
      'stableford': {
        name: 'Stableford',
        img3:  'images/stableford_image/setGameNameAndGameType.png',
        img4:  'images/stableford_image/setMatchDetails.png',
        img5:  'images/stroke_play_image/setPerMatchHoles.png',
        img6:  'images/progressive_skins_image/setAmountforEach.png',
        img7:  'images/stroke_play_image/setPoints.png',
        img8:  'images/stableford_image/gameCreatedSuccessfully.png',
        img9:  'images/stableford_image/gameOverview.png',
        img10:  'images/stableford_image/addBetsScreen.png',
        img11:  'images/stableford_image/allPlayersResult.png',
        img12:  'images/stableford_image/foursomeTab.png',
        img13:  'images/stableford_image/foursomeScorecard.png',
        img14:  'images/stableford_image/foursomeWinners.png',
        img15:  'images/stroke_play_image/ledgerPageView.png',
        playTypeBadges: [
          {label:'Individual ✓',active:true},{label:'Modified Stableford',active:true},
          {label:'COD',active:false},{label:'2v2 Teams',active:false},{label:'Random',active:false},
          {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},{label:'1v1',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                                          <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                                        </div>
                                                        <div style="display:flex;gap:8px;flex-wrap:wrap">
                                                          <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                           <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">Front 9</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Holes 1–9</div>
                                                          </div>
                                                          <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                           <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">Back 9</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Holes 10–18</div>
                                                          </div>

                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                        </div>
                                                        <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                                      </div>`,
        amountForEach: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                        <div>
                                                          <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                            <i class="bi bi-star-fill" style="color:#2563eb;font-size:.9rem"></i>
                                                            <span style="font-size:.88rem;font-weight:700;color:var(--ink)">$ Per Points</span>
                                                            <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                          </div>
                                                          <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                            Dollar amount awarded for each <strong>point won during the round</strong>. Pre-filled — edit if needed.
                                                          </p>
                                                        </div>

                                                        <div style="background:#dbeafe;border:1.5px solid #2563eb;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                          <div style="font-size:1.2rem;font-weight:800;color:#2563eb;font-family:var(--font-alt)">1</div>
                                                          <div style="font-size:.6rem;color:#1d4ed8;font-weight:600;letter-spacing:.04em;text-transform:uppercase">
                                                            $ / point
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    The field(s) are <strong>pre-filled with default point value(s)</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 2 Options</h4>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">1. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">2. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>Stableford</strong> — available play types: <strong>Individual</strong>. Modified Stableford is available as an optional setting and is Off by default. When enabled, scoring is based on points earned per hole instead of total strokes.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Stableford.</span>',
        holesDetail: '<div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Value</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Dollar value of each skin. If a hole is tied, the skin carries over and <strong>accumulates</strong> to the next hole.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$5.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per skin</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side events alongside the skins game.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-arrow-repeat" style="margin-right:5px"></i>In Progressive Skins, <strong>carried-over skins accumulate</strong> — a tied hole rolls its value to the next, creating big payouts when a streak is finally broken.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Win = 1 Point</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Each skin won counts as 1 point on the leaderboard. Carried-over skins still count as 1 win.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / skin</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Progressive Skins tracks wins per hole — the player with the <strong>most skins won</strong> leads the leaderboard regardless of carry-over amounts.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 9 steps.`,
            addScoreTitle2:`Score Entry Flow — 9 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                            <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                            <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                            <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                            <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                            <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                            <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                            <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                            <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                            <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                          </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                   <div class="wsi-desc">
                                                     A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                     <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                     <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                     </div>
                                                     </div>
                                                     <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/stroke_play_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After selecting your foursome, you will see the foursome detail screen. Tap the <strong>Add Score</strong> button to continue to foursome settings.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/stableford_image/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Skode & Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong>  to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>

                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong>
                                                             — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/stableford_image/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <span style="font-size:.8rem;color:var(&#45;&#45;ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`,
      },
      'wolf': {
        name: 'Wolf',
        img3:  'images/wolf_image/setGameNameAndGameType.png',
        img4:  'images/regular_skins_image/setMatchDetails.png',
        img5:  'images/wolf_image/setPerMatchHoles.png',
        img6:  'images/progressive_skins_image/setAmountforEach.png',
        img7:  'images/wolf_image/setPoints.png',
        img8:  'images/wolf_image/gameCreatedSuccessfully.png',
        img9:  'images/wolf_image/gameOverview.png',
        img10:  'images/wolf_image/addBetsScreen.png',
        img11:  'images/wolf_image/allPlayersResult.png',
        img12:  'images/wolf_image/foursomeTab.png',
        img13:  'images/wolf_image/foursomeScorecard.png',
        img14:  'images/wolf_image/foursomeWinners.png',
        img15:  'images/wolf_image/ledgerPageView.png',
        playTypeBadges: [
          {label:'Individual ✓',active:true},{label:'Modified Stableford',active:false},
          {label:'COD',active:false},{label:'2v2 Teams',active:false},{label:'Random',active:false},
          {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},{label:'1v1',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                                          <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                                        </div>
                                                        <div style="display:flex;gap:8px;flex-wrap:wrap">

                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                        </div>
                                                        <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>.</p>
                                                      </div>`,
        amountForEach: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                        <div>
                                                          <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                            <i class="bi bi-star-fill" style="color:#2563eb;font-size:.9rem"></i>
                                                            <span style="font-size:.88rem;font-weight:700;color:var(--ink)">$ Per Points</span>
                                                            <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                          </div>
                                                          <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                            Dollar amount awarded for each <strong>point won during the round</strong>. Pre-filled — edit if needed.
                                                          </p>
                                                        </div>

                                                        <div style="background:#dbeafe;border:1.5px solid #2563eb;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                          <div style="font-size:1.2rem;font-weight:800;color:#2563eb;font-family:var(--font-alt)">0.10</div>
                                                          <div style="font-size:.6rem;color:#1d4ed8;font-weight:600;letter-spacing:.04em;text-transform:uppercase">
                                                            $ / point
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                      <div>
                                                        <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                          <i class="bi bi-lightning-charge-fill" style="color:#d97706;font-size:.9rem"></i>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Points for Challenged</span>
                                                          <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                        </div>
                                                        <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                          Points awarded when the wolf's partner is <strong>challenged and wins</strong> the hole.
                                                        </p>
                                                      </div>
                                                      <div style="background:#fef3c7;border:1.5px solid #d97706;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                        <div style="font-size:1.2rem;font-weight:800;color:#d97706;font-family:var(--font-alt)">2</div>
                                                        <div style="font-size:.6rem;color:#92400e;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pts</div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                  <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                    <div>
                                                      <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                        <i class="bi bi-shield-fill-check" style="color:#0f766e;font-size:.9rem"></i>
                                                        <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Points for Unchallenged</span>
                                                        <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                      </div>
                                                      <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                        Points earned when the wolf <strong>plays alone and wins</strong> without being challenged.
                                                      </p>
                                                    </div>
                                                    <div style="background:#ccfbf1;border:1.5px solid #0f766e;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                      <div style="font-size:1.2rem;font-weight:800;color:#0f766e;font-family:var(--font-alt)">1</div>
                                                      <div style="font-size:.6rem;color:#134e4a;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pts</div>
                                                    </div>
                                                  </div>
                                                  </div>
                                                    <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                      <div>
                                                        <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                          <i class="bi bi-trophy-fill" style="color:#dc2626;font-size:.9rem"></i>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Max Wolf Points</span>
                                                          <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                        </div>
                                                        <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                          Maximum points a wolf player can accumulate in a <strong>single game session</strong>.
                                                        </p>
                                                      </div>
                                                      <div style="background:#fee2e2;border:1.5px solid #dc2626;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                        <div style="font-size:1.2rem;font-weight:800;color:#dc2626;font-family:var(--font-alt)">18</div>
                                                        <div style="font-size:.6rem;color:#991b1b;font-weight:600;letter-spacing:.04em;text-transform:uppercase">max</div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    The field(s) are <strong>pre-filled with default point value(s)</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 2 Options</h4>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">1. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">2. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>Wolf</strong> — available play types: <strong>Individual</strong>. Players compete in the Wolf format, where the designated Wolf may choose a partner or play alone on each hole. Points are awarded based on hole results, and the player with the highest total points wins.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Stroke Play.</span>',
        holesDetail: '<div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Value</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Dollar value of each skin. If a hole is tied, the skin carries over and <strong>accumulates</strong> to the next hole.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$5.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per skin</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side events alongside the skins game.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-arrow-repeat" style="margin-right:5px"></i>In Progressive Skins, <strong>carried-over skins accumulate</strong> — a tied hole rolls its value to the next, creating big payouts when a streak is finally broken.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Win = 1 Point</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Each skin won counts as 1 point on the leaderboard. Carried-over skins still count as 1 win.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / skin</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Progressive Skins tracks wins per hole — the player with the <strong>most skins won</strong> leads the leaderboard regardless of carry-over amounts.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 9 steps.`,
            addScoreTitle2:`Score Entry Flow — 9 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                            <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                            <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                            <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                            <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                            <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                            <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                            <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                            <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                            <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                          </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                   <div class="wsi-desc">
                                                     A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                     <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                     <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                     </div>
                                                     <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                     </div>
                                                     <div style="background:#faf5ff;border:1px solid #d8b4fe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                       <strong style="color:#0f172a">Captain Rotation</strong> — For Wolf games, assign the Wolf (Captain) for each hole. The rotation is pre-filled for holes <strong>1–18</strong> and can be adjusted as needed before starting the round.
                                                     </div>
                                                     </div>
                                                     <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/wolf_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After selecting your foursome, you will see the foursome detail screen. Tap the <strong>Add Score</strong> button to continue to foursome settings.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/wolf_image/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Skode & Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong>  to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>

                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong>
                                                             — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/wolf_image/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/regular_skins_image/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <span style="font-size:.8rem;color:var(&#45;&#45;ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`,
      },
      'scramble': {
        name: 'Scramble',
        img3:  'images/scramble_image/setGameNameAndGameType.png',
        img4:  'images/scramble_image/setMatchDetails.png',
        img5:  'images/scramble_image/setPerMatchHoles.png',
        img6:  'images/scramble_image/setAmountforEach.png',
        img7:  'images/scramble_image/setPoints.png',
        img8:  'images/scramble_image/gameCreatedSuccessfully.png',
        img9:  'images/scramble_image/gameOverview.png',
        img10:  'images/scramble_image/addBetsScreen.png',
        img11:  'images/scramble_image/allPlayersResult.png',
        img12:  'images/scramble_image/foursomeTab.png',
        img13:  'images/scramble_image/foursomeScorecard.png',
        img14:  'images/scramble_image/foursomeWinners.png',
        img15:  'images/scramble_image/ledgerPageView.png',
        playTypeBadges: [
          {label:'COD ✓',active:true},{label:'2v2 Teams',active:true},{label:'4 Man Teams',active:true},
          {label:'Individual',active:false},{label:'Modified Stableford',active:false},{label:'Random',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},{label:'1v1',active:false}
        ],
        holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                                          <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                          <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                                        </div>
                                                        <div style="display:flex;gap:8px;flex-wrap:wrap">
                                                          <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                           <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">Front 9</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Holes 1–9</div>
                                                          </div>
                                                          <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                           <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">Back 9</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Holes 10–18</div>
                                                          </div>

                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                            <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                                            <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                                            <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                        </div>
                                                        <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>. You can change this if needed before proceeding.</p>
                                                          <br/>
                                                        <div style="display:flex;gap:8px">
                                                         <div style="flex:1;background:#f1f5f2;border:1.5px solid var(&#45;&#45;border);border-radius:7px;padding:10px 12px;text-align:center">
                                                          <div style="font-size:.85rem;font-weight:800;color:var(&#45;&#45;ink-muted)">3 Holes</div>
                                                           <div style="font-size:.68rem;color:var(&#45;&#45;ink-faint);margin-top:2px">Per Match</div>
                                                          </div>
                                                          <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                                          <div style="font-size:.85rem;font-weight:800;color:#15803d">6 Holes</div>
                                                          <div style="font-size:.68rem;color:#166534;margin-top:2px">Per Match</div>
                                                          <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                                          </div>
                                                          </div>
                                                      </div>`,
        amountForEach: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                                   <div>
                                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                                       <i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i>
                                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span>
                                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                                     </div>
                                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The wager amount applied to each match played. A default value is pre-filled — update if needed.</p>
                                                                   </div>
                                                                   <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                                     <div style="font-size:1.1rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">$3.00</div>
                                                                     <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">per match</div>
                                                                   </div>
                                                                 </div>
                                                               </div>
                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                     <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                   <div>
                                                     <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                       <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                       <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                       <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                     </div>
                                                     <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                   </div>
                                                   <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                     <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                     <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                   </div>
                                                 </div>
                                               </div>

                                               <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                 <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                 All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                               </div>`,
        setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                        <div>
                                                          <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                            <i class="bi bi-star-fill" style="color:#2563eb;font-size:.9rem"></i>
                                                            <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Points Per Match Win</span>
                                                            <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                          </div>
                                                          <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">
                                                            Number of <strong>points awarded for each match win</strong>. A default value is pre-filled and can be adjusted if needed.
                                                          </p>
                                                        </div>

                                                        <div style="background:#dbeafe;border:1.5px solid #2563eb;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                          <div style="font-size:1.2rem;font-weight:800;color:#2563eb;font-family:var(--font-alt)">3</div>
                                                          <div style="font-size:.6rem;color:#1d4ed8;font-weight:600;letter-spacing:.04em;text-transform:uppercase">
                                                            PTS
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                    <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                    The field(s) are <strong>pre-filled with default point value(s)</strong>. Tap any field to update before proceeding.
                                                  </div>`,
        gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
        gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 2 Options</h4>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">1. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                        <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">2. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
        playTypeNote: '<strong>Scramble</strong> — available play types: <strong>COD</strong>, <strong>2v2 Teams</strong> and <strong>4 Man Teams</strong>. All players on a team hit each shot, and the team selects the best ball position for the next shot. This process continues until the hole is completed. The team with the lowest total score at the end of the round wins.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for Scramble.</span>',
        holesDetail: '<div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">Full 18</div><div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div><div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">Front 9</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Holes 1–9</div></div>',
        amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Value</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Dollar value of each skin. If a hole is tied, the skin carries over and <strong>accumulates</strong> to the next hole.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$5.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per skin</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side events alongside the skins game.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-arrow-repeat" style="margin-right:5px"></i>In Progressive Skins, <strong>carried-over skins accumulate</strong> — a tied hole rolls its value to the next, creating big payouts when a streak is finally broken.</div>',
        pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skin Win = 1 Point</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Each skin won counts as 1 point on the leaderboard. Carried-over skins still count as 1 win.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / skin</div></div></div></div><div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#166534;line-height:1.55"><i class="bi bi-info-circle" style="margin-right:5px"></i>Progressive Skins tracks wins per hole — the player with the <strong>most skins won</strong> leads the leaderboard regardless of carry-over amounts.</div>',
       /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 12 steps.`,
            addScoreTitle2:`Score Entry Flow — 12 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                                                  <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                                                  <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-shuffle"></i></span></div><div class="wstep-label">Generate Matches</div></div>
                                                                  <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-diagram-2"></i></span></div><div class="wstep-label">Match Config</div></div>
                                                                  <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-gear"></i></span></div><div class="wstep-label">Foursome Setting</div></div>
                                                                  <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                                                  <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                                                  <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                                                  <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                                                  <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                                                  <div class="wstep" onclick="asGoTo(9)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                                                  <div class="wstep" onclick="asGoTo(10)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                                                  <div class="wstep" onclick="asGoTo(11)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                                                </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">01</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Select Foursome</div>
                                                                                            <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed. The foursome flow starts from <strong>Select Cart &amp; Driver</strong>, so tap on it to begin.</div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/selectFoursome.png" alt="Select Foursome" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <span></span>
                                                                                          <div class="wizard-progress-dots" id="asdots-0"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Generate Matches</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-1">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">02</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Generate Matches</div>
                                                                                            <div class="wsi-desc">
                                                                                              You will now see the <strong>Foursome Players</strong> bottom sheet. Here you can reassign each player as a <strong>Driver</strong> or <strong>Passenger</strong> for <strong>Cart 1</strong> and <strong>Cart 2</strong>.
                                                                                              <div style="margin-top:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;font-size:.82rem;color:#475569;line-height:1.6">
                                                                                                Once you've set the cart assignments, tap <strong>Generate Matches</strong> to automatically create the foursome match pairings based on your selection.
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-shuffle"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/foursomePlayers.png" alt="Foursome Players — Generate Matches" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-1"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Match Config</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-2">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">03</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Match Configuration</div>
                                                                                            <div class="wsi-desc">
                                                                                              After generating matches, you will see the <strong>Foursome Matches</strong> screen showing matches based on holes. The matches are displayed across <strong>6 holes</strong> per match group.
                                                                                              <div style="margin-top:10px;display:flex;align-items:flex-start;gap:10px;background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:10px 14px">
                                                                                                <i class="bi bi-info-circle" style="color:#c2751a;margin-top:2px;flex-shrink:0"></i>
                                                                                                <span style="font-size:.82rem;color:#475569;line-height:1.6">Review the match configuration showing 6-hole matches, then tap <strong>Done</strong> to confirm and proceed to the next step.</span>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-diagram-2"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/matchConfiguration.png" alt="Match Configuration" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-2"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Foursome Setting</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-3">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">04</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Add Foursome Setting</div>
                                                                                            <div class="wsi-desc">
                                                                                              You are back on the <strong>Select Foursome</strong> screen showing your progress. The first two steps are now complete:
                                                                                              <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                                                                <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                                                                  <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 1. Select Cart &amp; Driver
                                                                                                </div>
                                                                                                <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                                                                  <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 2. Generate Matches
                                                                                                </div>
                                                                                                <div style="display:flex;align-items:center;gap:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:700">
                                                                                                  <i class="bi bi-arrow-right-circle-fill" style="color:#2563eb"></i> 3. Add Foursome Setting &nbsp;<span style="font-weight:400;color:#475569">— tap this to continue</span>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-gear"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/selectFoursomeProgress.png" alt="Select Foursome Progress" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-3"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-4">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">05</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                                                            <div class="wsi-desc">
                                                                                              A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                                                              <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                                                                <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                                                                  <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                                                                </div>
                                                                                                <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                                                                  <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                                                                </div>
                                                                                                <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                                                                  <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                                                                </div>
                                                                                                <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                                                                  <strong style="color:#0f172a">Scoring by Scorekeeper Only</strong> — Use this option to override the game-level scoring setting for the selected foursome. Changes made here affect only this foursome.
                                                                                                </div>
                                                                                              </div>
                                                                                              <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/scramble_image/foursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-4"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-5">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">06</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Tap Add Score</div>
                                                                                            <div class="wsi-desc">After completing the Foursome Settings, tap the <strong>Add Score</strong> button to continue to the 18-hole score entry grid.</div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/tapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-5"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-6">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">07</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">18-Hole Score Grid</div>
                                                                                            <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-6"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-7">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">08</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                                                            <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/scramble_image/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-7"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Skode &amp; Junk</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-8">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">09</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                                                            <div class="wsi-desc">
                                                                                              After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                                                              <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                                                                <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                                                                  <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                                                                    <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                                                                    <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                                                                    <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                                                                  </div>
                                                                                                  <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                                                                    Tap the <strong>accordion</strong> to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                                                                  </div>
                                                                                                </div>

                                                                                                <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                                                                  <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                                                                    <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                                                                    <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                                                                    <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                                                                  </div>
                                                                                                  <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                                                                    Tap on any category — <strong>Skode</strong>, <strong>Junk</strong> — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                                                                  </div>
                                                                                                </div>

                                                                                                <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                                                                  <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                                                                    <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                                                                    <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                                                                    <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                                                                  </div>
                                                                                                  <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                                                                    In the pop-up, assign the reward based on the outcome:
                                                                                                    <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                                                                      <div style="display:flex;align-items:center;gap:8px">
                                                                                                        <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                                                        <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                                                                      </div>
                                                                                                      <div style="display:flex;align-items:center;gap:8px">
                                                                                                        <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                                                        <span>Player attempted but did not meet the reward condition.</span>
                                                                                                      </div>
                                                                                                      <div style="display:flex;align-items:center;gap:8px">
                                                                                                        <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                                                        <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>

                                                                                                <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                                                                  <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                                                                    <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                                                                    <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                                                                    <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                                                                  </div>
                                                                                                  <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                                                                    Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                                                                  </div>
                                                                                                </div>

                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-8"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(9)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-9">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">10</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">Leaderboard</div>
                                                                                            <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(8)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-9"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(10)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-10">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">11</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">View Results Tab</div>
                                                                                            <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/scramble_image/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(9)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-10"></div>
                                                                                          <button class="wizard-nav-btn primary" onclick="asGoTo(11)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                                                        </div>
                                                                                      </div>

                                                                                      <div class="wizard-slide" id="asslide-11">
                                                                                        <div class="wizard-slide-info">
                                                                                          <div class="wsi-num">12</div>
                                                                                          <div class="wsi-body">
                                                                                            <div class="wsi-title">All Holes Score Added</div>
                                                                                            <div class="wsi-desc">
                                                                                              Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                                                              <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                                                                <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                                                                  <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                                                                  <div>
                                                                                                    <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                                                                    <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                                                                  </div>
                                                                                                </div>

                                                                                                <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                                                                  <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                                                                  <div>
                                                                                                    <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                                                                    <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                                                                  </div>
                                                                                                </div>

                                                                                                <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                                                                  <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                                                                  <div>
                                                                                                    <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                                                                    <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                                                                  </div>
                                                                                                </div>

                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                                                        </div>
                                                                                        <div class="wizard-slide-img"><div class="image-placeholder">
                                                                                          <img src="images/vegas_image/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                                                        </div></div>
                                                                                        <div class="wizard-nav">
                                                                                          <button class="wizard-nav-btn" onclick="asGoTo(10)"><i class="bi bi-arrow-left"></i> Back</button>
                                                                                          <div class="wizard-progress-dots" id="asdots-11"></div>
                                                                                          <span style="font-size:.8rem;color:var(--ink-faint)">&#10003; Scoring Complete!</span>
                                                                                        </div>
                                                                                      </div>`,
      },
      'ryder_cup': {
              name: 'Ryder Cup',
              img3:  'images/ryder_cup_image/setGameNameAndGameType.png',
              img4:  'images/ryder_cup_image/setMatchDetails.png',
              img5:  'images/ryder_cup_image/setPerMatchHoles.png',
              img6:  'images/ryder_cup_image/setAmountforEach.png',
              img7:  'images/ryder_cup_image/setPoints.png',
              img8:  'images/ryder_cup_image/gameCreatedSuccessfully.png',
              img9:  'images/ryder_cup_image/gameOverview.png',
              img10:  'images/ryder_cup_image/addBetsScreen.png',
              img11:  'images/scramble_image/allPlayersResult.png',
              img12:  'images/scramble_image/foursomeTab.png',
              img13:  'images/scramble_image/foursomeScorecard.png',
              img14:  'images/scramble_image/foursomeWinners.png',
              img15:  'images/scramble_image/ledgerPageView.png',
              playTypeBadges: [
                {label:'9 Hole Macthes (1v1 & 2v2) ✓',active:true},{label:'6 Hole Matches (2v2)',active:true},{label:'Random',active:false},
                {label:'4 Man Teams',active:false},{label:'Cards',active:false},{label:'Ultra Vegas',active:false},
                {label:'COD',active:false},{label:'Individual',active:false},{label:'Modified Stableford',active:false}
              ],
              holesDesc:`<div style="background:var(&#45;&#45;bg);border:1px solid var(&#45;&#45;border);border-radius:8px;padding:12px 14px">
                                           <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                                             <span style="background:var(&#45;&#45;brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                             <span style="font-size:.88rem;font-weight:700;color:var(&#45;&#45;ink)">Holes per Match</span>
                                           </div>
                                           <div style="display:flex;gap:8px;flex-wrap:wrap">
                                             <div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative">
                                               <div style="font-size:.75rem;font-weight:800;color:#15803d">Total 18</div>
                                               <div style="font-size:.68rem;color:#166534;margin-top:2px">All Holes</div>
                                               <span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap;letter-spacing:.04em">DEFAULT</span>
                                             </div>
                                           </div>
                                           <p style="font-size:.74rem;color:var(&#45;&#45;ink-faint);margin-top:7px;line-height:1.5">The default selection is <strong>Total 18</strong>.</p>

                                         </div>`,
              amountForEach:`<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                               <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                 <div>
                                                   <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                     <i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i>
                                                     <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span>
                                                     <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                   </div>
                                                   <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The wager amount applied to each match played. A default value is pre-filled — update if needed.</p>
                                                 </div>
                                                 <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                   <div style="font-size:1.1rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">$10.00</div>
                                                   <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">per match</div>
                                                 </div>
                                               </div>
                                             </div>

                                             <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                               <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                 <div>
                                                   <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                     <i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i>
                                                     <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span>
                                                     <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                   </div>
                                                   <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Skode side rewards. Pre-filled by default — change if required.</p>
                                                 </div>
                                                 <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                   <div style="font-size:1.1rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">$5.00</div>
                                                   <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                 </div>
                                               </div>
                                             </div>

                                             <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                               <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                 <div>
                                                   <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                     <i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i>
                                                     <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span>
                                                     <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">DEFAULT</span>
                                                   </div>
                                                   <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">The total pool contributed for Junk side rewards. Pre-filled by default — change if required.</p>
                                                 </div>
                                                 <div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                   <div style="font-size:1.1rem;font-weight:800;color:#7c3aed;font-family:var(--font-alt)">$2.00</div>
                                                   <div style="font-size:.6rem;color:#7c3aed;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pool total</div>
                                                 </div>
                                               </div>
                                             </div>

                                             <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                               <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                               All three values are <strong>pre-filled with default amounts</strong>. You can tap any field to edit the value before proceeding.
                                             </div>`,
              setPointsScreen: `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                  <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                    <div>
                                                      <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                        <i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i>
                                                        <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span>
                                                        <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                      </div>
                                                      <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning a single hole</strong>. Pre-filled — edit if needed.</p>
                                                    </div>
                                                    <div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                      <div style="font-size:1.2rem;font-weight:800;color:#15803d;font-family:var(--font-alt)">1</div>
                                                      <div style="font-size:.6rem;color:#166534;font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / hole</div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
                                                  <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                                                    <div>
                                                      <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                                                        <i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i>
                                                        <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span>
                                                        <span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px;letter-spacing:.04em">Required</span>
                                                      </div>
                                                      <p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points awarded to a player or team for <strong>winning an entire match</strong>. Pre-filled — edit if needed.</p>
                                                    </div>
                                                    <div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0">
                                                      <div style="font-size:1.2rem;font-weight:800;color:var(--accent);font-family:var(--font-alt)">1</div>
                                                      <div style="font-size:.6rem;color:var(--accent);font-weight:600;letter-spacing:.04em;text-transform:uppercase">pt / match</div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:8px 12px;font-size:.75rem;color:#1e40af;line-height:1.55">
                                                  <i class="bi bi-info-circle" style="margin-right:5px"></i>
                                                  Both fields are <strong>pre-filled with default point values</strong>. Tap any field to update before proceeding.
                                                </div>`,
              gameCreatedTitle:`A confirmation screen appears indicating the game has been created. You now have three options: <strong>Add Across Foursome Team</strong>, <strong>View Game</strong>, or <strong>Create Game for Another Day</strong>.`,
              gameCreatedFooter :`<h4 class="card-heading">After Game Creation — 2 Options</h4>
                                      <div class="action-card"><div class="action-icon"><i class="bi bi-eye"></i></div><div><div class="action-title">1. View Game</div><div class="action-desc">Opens the Game Details screen with access to Overview, Results, Ledger, Add Score, and Add Bets tabs.</div></div></div>
                                      <div class="action-card"><div class="action-icon"><i class="bi bi-calendar-plus"></i></div><div><div class="action-title">2. Create Game for Another Day</div><div class="action-desc">Create another game within the same event using the same tee sheet or a new one.</div></div></div>`,
              playTypeNote: '<strong>Ryder Cup</strong> — available play types: <strong>9 Hole Macthes (1v1 & 2v2)</strong> and <strong>6 Hole Matches (2v2)</strong>. Currently selected: <strong>9 Hole Macthes (1v1 & 2v2)</strong>.<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for this game type.</span>',
              holesDetail: '<div style="flex:1;background:#f1f5f2;border:1.5px solid var(--border);border-radius:7px;padding:10px 12px;text-align:center"><div style="font-size:.85rem;font-weight:800;color:var(--ink-muted)">3 Holes</div><div style="font-size:.68rem;color:var(--ink-faint);margin-top:2px">Per Match</div></div><div style="flex:1;background:#dcfce7;border:1.5px solid #15803d;border-radius:7px;padding:10px 12px;text-align:center;position:relative"><div style="font-size:.85rem;font-weight:800;color:#15803d">6 Holes</div><div style="font-size:.68rem;color:#166534;margin-top:2px">Per Match</div><span style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#15803d;color:#fff;font-size:.58rem;font-weight:700;padding:1px 7px;border-radius:100px;white-space:nowrap">DEFAULT</span></div>',
              amountFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-cash-coin" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Bet per Match</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Wager amount per match. Pre-filled — update if needed.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#15803d">$3.00</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">per match</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-stars" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Skode Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Skode side rewards. Pre-filled.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--accent)">$5.00</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pool total</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy" style="color:#7c3aed;font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Junk Pool</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">DEFAULT</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Total pool for Junk side rewards. Pre-filled.</p></div><div style="background:#ede9fe;border:1.5px solid #7c3aed;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:#7c3aed">$2.00</div><div style="font-size:.6rem;color:#7c3aed;font-weight:600;text-transform:uppercase">pool total</div></div></div></div>',
              pointsFields: '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-flag-fill" style="color:var(--brand);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Hole Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points for winning a single hole. Pre-filled.</p></div><div style="background:#dcfce7;border:1.5px solid #15803d;border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:#15803d">1</div><div style="font-size:.6rem;color:#166534;font-weight:600;text-transform:uppercase">pt / hole</div></div></div></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><i class="bi bi-trophy-fill" style="color:var(--accent);font-size:.9rem"></i><span style="font-size:.88rem;font-weight:700;color:var(--ink)">Point per Match Win</span><span style="background:var(--brand);color:#fff;font-size:.6rem;font-weight:700;padding:1px 7px;border-radius:4px">Required</span></div><p style="font-size:.78rem;color:var(--ink-muted);line-height:1.5;margin:0">Points for winning an entire match. Pre-filled.</p></div><div style="background:#fef3e2;border:1.5px solid var(--accent);border-radius:8px;padding:8px 16px;text-align:center;flex-shrink:0"><div style="font-size:1.2rem;font-weight:800;color:var(--accent)">0</div><div style="font-size:.6rem;color:var(--accent);font-weight:600;text-transform:uppercase">pt / match</div></div></div></div>',
            /* add score flow */
            addScoreTitle1:`Enter player scores across the 18-hole grid — 12 steps.`,
            addScoreTitle2:`Score Entry Flow — 12 Steps`,
            addScoreSteper:`<div class="wizard-stepper" id="asTabs" style="margin-bottom:16px">
                                      <div class="wstep active" onclick="asGoTo(0)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-people"></i></span></div><div class="wstep-label">Select Foursome</div></div>
                                      <div class="wstep" onclick="asGoTo(1)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-shuffle"></i></span></div><div class="wstep-label">Generate Matches</div></div>
                                      <div class="wstep" onclick="asGoTo(2)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-diagram-2"></i></span></div><div class="wstep-label">Match Config</div></div>
                                      <div class="wstep" onclick="asGoTo(3)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-gear"></i></span></div><div class="wstep-label">Foursome Setting</div></div>
                                      <div class="wstep" onclick="asGoTo(4)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-sliders"></i></span></div><div class="wstep-label">Foursome Settings</div></div>
                                      <div class="wstep" onclick="asGoTo(5)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-clipboard2-plus"></i></span></div><div class="wstep-label">Add Score</div></div>
                                      <div class="wstep" onclick="asGoTo(6)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-grid-3x3"></i></span></div><div class="wstep-label">Holes Grid</div></div>
                                      <div class="wstep" onclick="asGoTo(7)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-pencil-square"></i></span></div><div class="wstep-label">Scorecard</div></div>
                                      <div class="wstep" onclick="asGoTo(8)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-stars"></i></span></div><div class="wstep-label">Skode &amp; Junk</div></div>
                                      <div class="wstep" onclick="asGoTo(9)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-check2-all"></i></span></div><div class="wstep-label">Leaderboard</div></div>
                                      <div class="wstep" onclick="asGoTo(10)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-bar-chart-line"></i></span></div><div class="wstep-label">Results</div></div>
                                      <div class="wstep" onclick="asGoTo(11)"><div class="wstep-circle"><span class="wstep-icon"><i class="bi bi-trophy"></i></span></div><div class="wstep-label">All Holes Done</div></div>
                                    </div>`,
            showAddScoreMatchSlide123:`<div class="wizard-slide active" id="asslide-0">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">01</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Select Foursome</div>
                                                     <div class="wsi-desc">Tap <strong>Add Score</strong> from the Overview Tab. You will be redirected to the <strong>Select Foursome</strong> screen. A list of available foursomes is displayed — tap your desired foursome to proceed. The foursome flow starts from <strong>Select Cart &amp; Driver</strong>, so tap on it to begin.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-people"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321MiloSelectFoursome.png" alt="Select Foursome" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <span></span>
                                                   <div class="wizard-progress-dots" id="asdots-0"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(1)"><i class="bi bi-arrow-right"></i> Next: Generate Matches</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-1">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">02</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Generate Matches</div>
                                                     <div class="wsi-desc">
                                                       You will now see the <strong>Foursome Players</strong> bottom sheet. Here you can reassign each player as a <strong>Driver</strong> or <strong>Passenger</strong> for <strong>Cart 1</strong> and <strong>Cart 2</strong>.
                                                       <div style="margin-top:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;font-size:.82rem;color:#475569;line-height:1.6">
                                                         Once you've set the cart assignments, tap <strong>Generate Matches</strong> to automatically create the foursome match pairings based on your selection.
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-shuffle"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321MiloFoursomePlayers.png" alt="Foursome Players — Generate Matches" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(0)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-1"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(2)"><i class="bi bi-arrow-right"></i> Next: Match Config</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-2">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">03</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Match Configuration</div>
                                                     <div class="wsi-desc">
                                                       After generating matches, you will see the <strong>Foursome Matches</strong> screen showing matches based on holes. The matches are displayed across <strong>6 holes</strong> per match group.
                                                       <div style="margin-top:10px;display:flex;align-items:flex-start;gap:10px;background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:10px 14px">
                                                         <i class="bi bi-info-circle" style="color:#c2751a;margin-top:2px;flex-shrink:0"></i>
                                                         <span style="font-size:.82rem;color:#475569;line-height:1.6">Review the match configuration showing 6-hole matches, then tap <strong>Done</strong> to confirm and proceed to the next step.</span>
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-diagram-2"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321MiloMatchConfiguration.png" alt="Match Configuration" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(1)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-2"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(3)"><i class="bi bi-arrow-right"></i> Next: Foursome Setting</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-3">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">04</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Add Foursome Setting</div>
                                                     <div class="wsi-desc">
                                                       You are back on the <strong>Select Foursome</strong> screen showing your progress. The first two steps are now complete:
                                                       <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                         <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                           <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 1. Select Cart &amp; Driver
                                                         </div>
                                                         <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:600">
                                                           <i class="bi bi-check-circle-fill" style="color:#16a34a"></i> 2. Generate Matches
                                                         </div>
                                                         <div style="display:flex;align-items:center;gap:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px 12px;font-size:.82rem;color:#0f172a;font-weight:700">
                                                           <i class="bi bi-arrow-right-circle-fill" style="color:#2563eb"></i> 3. Add Foursome Setting &nbsp;<span style="font-weight:400;color:#475569">— tap this to continue</span>
                                                         </div>
                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-gear"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321MiloSelectFoursomeProgress.png" alt="Select Foursome Progress" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(2)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-3"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(4)"><i class="bi bi-arrow-right"></i> Next: Foursome Settings</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-4">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">05</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Foursome Settings (Bottom Sheet)</div>
                                                     <div class="wsi-desc">
                                                       A <strong>bottom sheet</strong> slides up with the foursome configuration options. Fill in the required settings, then enable optional rules using the toggle buttons:
                                                       <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
                                                         <div style="background:#fef3e2;border:1px solid #fed7aa;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Newt &amp; Towfer Junk</strong> — Enable via toggle. <em>Note: This applies only for the <strong>18th hole</strong>.</em> <em>Default: Off.</em>
                                                         </div>
                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Rebit &amp; Cheken Rule</strong> — Enable via toggle to activate this rule for your foursome. <em>Default: Off.</em>
                                                         </div>
                                                         <div style="background:#fff1f2;border:1px solid #fda4af;border-radius:8px;padding:9px 13px;font-size:.81rem;color:#475569;line-height:1.55">
                                                           <strong style="color:#0f172a">Dot Game</strong> — Enable via toggle to activate Dot Game scoring. <em>Default: Off.</em>
                                                         </div>
                                                       </div>
                                                       <div style="margin-top:10px;font-size:.82rem;color:#475569">Once all settings are configured, tap <strong>Done</strong> to proceed.</div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-sliders"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321MiloFoursomeSettingsBottomSheet.png" alt="Foursome Settings (Bottom Sheet)" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(3)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-4"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(5)"><i class="bi bi-arrow-right"></i> Next: Add Score</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-5">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">06</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Tap Add Score</div>
                                                     <div class="wsi-desc">After completing the Foursome Settings, tap the <strong>Add Score</strong> button to continue to the 18-hole score entry grid.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-clipboard2-plus"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321_milo_image/321MiloTapAddScore.png" alt="Tap Add Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(4)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-5"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(6)"><i class="bi bi-arrow-right"></i> Next: Holes Grid</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-6">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">07</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">18-Hole Score Grid</div>
                                                     <div class="wsi-desc">The full <strong>18-hole score grid</strong> opens showing all players in your foursome. Each row is a player, each column is a hole. Tap any <strong>hole number</strong> to start entering scores for that hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-grid-3x3"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/321_milo_image/321Milo-18-HoleScoreGrid.png" alt="18-Hole Score Grid" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(5)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-6"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(7)"><i class="bi bi-arrow-right"></i> Next: Scorecard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-7">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">08</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Scorecard — Enter &amp; Save Score</div>
                                                     <div class="wsi-desc">The <strong>Scorecard tab</strong> opens for the selected hole. Enter the score for each player, then tap <strong>Save</strong> or <strong>Next</strong> to move to the following hole. Repeat for every hole.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-pencil-square"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/scoreEntryScreen.png" alt="Scorecard — Enter &amp; Save Score" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(6)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-7"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(8)"><i class="bi bi-arrow-right"></i> Next: Skode &amp; Junk</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-8">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">09</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Skode &amp; Junk Rewards</div>
                                                     <div class="wsi-desc">
                                                       After saving a hole score, the <strong>Skode &amp; Junk</strong> section becomes available — these are <strong>side reward events</strong> that run alongside your main game score.

                                                       <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Open the Accordion</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap the <strong>accordion</strong> to expand it. You will see the available reward categories: <strong>Skode</strong>, <strong>Junk</strong>, <strong>Putts</strong>, <strong>Closest To Pin</strong>, <strong>Longest Drive</strong>, and <strong>Fairways</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Tap a Reward Category</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Tap on any category — <strong>Skode</strong>, <strong>Junk</strong> — to open the <strong>Add Skode &amp; Junk pop-up</strong>.
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Add Skode / Junk in Pop-up</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             In the pop-up, assign the reward based on the outcome:
                                                             <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#dcfce7;color:#16a34a;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MADE</span>
                                                                 <span>Player successfully completed the reward condition (e.g., made the putt, hit the fairway).</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fee2e2;color:#dc2626;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">MISSED</span>
                                                                 <span>Player attempted but did not meet the reward condition.</span>
                                                               </div>
                                                               <div style="display:flex;align-items:center;gap:8px">
                                                                 <span style="background:#fef3e2;color:#e8a020;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0">EARNED</span>
                                                                 <span>Player earned the reward event (e.g., birdie, closest to pin, longest drive).</span>
                                                               </div>
                                                             </div>
                                                           </div>
                                                         </div>

                                                         <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;overflow:hidden">
                                                           <div style="padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:default">
                                                             <span style="width:26px;height:26px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span>
                                                             <span style="font-size:.85rem;font-weight:700;color:#0f172a">Saved to Ledger</span>
                                                             <i class="bi bi-chevron-down" style="margin-left:auto;color:#64748b;font-size:12px"></i>
                                                           </div>
                                                           <div style="padding:0 14px 10px 50px;font-size:.8rem;color:#475569;line-height:1.6">
                                                             Once assigned, the reward is saved and <strong>feeds directly into the Ledger</strong> and payout calculations automatically.
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-stars"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/skode&JunkRewards.png" alt="Skode &amp; Junk Rewards" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(7)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-8"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(9)"><i class="bi bi-arrow-right"></i> Next: Leaderboard</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-9">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">10</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">Leaderboard</div>
                                                     <div class="wsi-desc">The <strong>Leaderboard</strong> displays the final standings for all foursomes in the game — including net scores, Skode &amp; Junk rewards, and overall rankings. All bet outcomes are reflected in the <strong>Results Tab</strong>.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-trophy"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/leaderboard.png" alt="Final Leaderboard" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(8)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-9"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(10)"><i class="bi bi-arrow-right"></i> Next: Results</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-10">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">11</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">View Results Tab</div>
                                                     <div class="wsi-desc">Navigate to the <strong>Results Tab</strong> from the Game Details screen. Here you can view your foursome's <strong>standings, net scores, and rankings</strong> updated in real time after each score entry.</div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-bar-chart-line"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/viewAddScoreResultsTab.png" alt="View Results Tab" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(9)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-10"></div>
                                                   <button class="wizard-nav-btn primary" onclick="asGoTo(11)"><i class="bi bi-arrow-right"></i> Next: All Holes Done</button>
                                                 </div>
                                               </div>

                                               <div class="wizard-slide" id="asslide-11">
                                                 <div class="wizard-slide-info">
                                                   <div class="wsi-num">12</div>
                                                   <div class="wsi-body">
                                                     <div class="wsi-title">All Holes Score Added</div>
                                                     <div class="wsi-desc">
                                                       Once scores have been entered for all 18 holes, the score grid shows a <strong>green ✓ tick on every hole</strong> — confirming all scores are recorded. Totals and net scores are automatically calculated. Here's what happens next:

                                                       <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px">

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Green Tick on All 18 Holes</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Every hole cell in the score grid displays a <strong>green tick</strong> confirming the score has been saved. Total and net scores are shown at the bottom of the grid.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#15803d;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">2</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Tap "Finish Foursome"</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">Once all holes are marked complete, tap the <strong>Finish Foursome</strong> button to finalise the scoring session for your group.</div>
                                                           </div>
                                                         </div>

                                                         <div style="display:flex;align-items:flex-start;gap:12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 14px">
                                                           <span style="width:28px;height:28px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
                                                           <div>
                                                             <div style="font-size:.85rem;font-weight:700;color:#0f172a;margin-bottom:3px">Redirected to Game Details → Results Tab</div>
                                                             <div style="font-size:.78rem;color:#475569;line-height:1.55">You are automatically redirected to the <strong>Game Details screen</strong>, landing on the <strong>Results Tab → All Players</strong> view — showing the complete standings, net scores, and rankings for everyone in the game.</div>
                                                           </div>
                                                         </div>

                                                       </div>
                                                     </div>
                                                   </div>
                                                   <div class="wsi-icon"><i class="bi bi-check2-all"></i></div>
                                                 </div>
                                                 <div class="wizard-slide-img"><div class="image-placeholder">
                                                   <img src="images/allHolesScoreAdded.png" alt="All Holes Score Added" class="app-image" />
                                                 </div></div>
                                                 <div class="wizard-nav">
                                                   <button class="wizard-nav-btn" onclick="asGoTo(10)"><i class="bi bi-arrow-left"></i> Back</button>
                                                   <div class="wizard-progress-dots" id="asdots-11"></div>
                                                   <span style="font-size:.8rem;color:var(--ink-faint)">&#10003; Scoring Complete!</span>
                                                 </div>
                                               </div>`
            },
    };

    //Defult Selection
    var currentGameType = '321milo';
    var currentGameCreateImage = GT_DATA[currentGameType].img3;
    // Update image
    const img = document.getElementById('createGameImg');
    if (img) {
       img.src = currentGameCreateImage;
    }

    var setMatchDetailsImage = GT_DATA[currentGameType].img4;
    // Update image
    const img1 = document.getElementById('setMatchDetailsImg');
    if (img1) {
      img1.src = setMatchDetailsImage;
    }

    var setPerMatchHolesImage = GT_DATA[currentGameType].img5;
    // Update image
    const img2 = document.getElementById('setPerMatchHolesImg');
    if (img2) {
      img2.src = setPerMatchHolesImage;
    }

    var setAmountforEachImage = GT_DATA[currentGameType].img6;
    // Update image
    const img3 = document.getElementById('setAmountforEachImg');
    if (img3) {
      img3.src = setAmountforEachImage;
    }

    var setPointsImage = GT_DATA[currentGameType].img7;
    // Update image
    const img4 = document.getElementById('setPointsImg');
    if (img4) {
      img4.src = setPointsImage;
    }

    var gameCreatedSuccessImage = GT_DATA[currentGameType].img8;
    // Update image
    const img5 = document.getElementById('gameCreatedSuccessImg');
    if (img5) {
      img5.src = gameCreatedSuccessImage;
    }

    //Game Details screen
    var gameOverviewImage = GT_DATA[currentGameType].img9;
    // Update image
    const img6 = document.getElementById('gameOverviewImg');
    if (img6) {
      img6.src = gameOverviewImage;
    }
    //Add Bets screen
    var addBetsScreenImage = GT_DATA[currentGameType].img10;
    // Update image
    const img7 = document.getElementById('addBetsScreenImg');
    if (img7) {
      img7.src = addBetsScreenImage;
    }

    //Show Results Screen
    var allPlayersResultImage = GT_DATA[currentGameType].img11;
    // Update image
    const img8 = document.getElementById('allPlayersResultImg');
    if (img8) {
      img8.src = allPlayersResultImage;
    }
    var foursomeTabImage = GT_DATA[currentGameType].img12;
    // Update image
    const img9 = document.getElementById('foursomeTabImg');
    if (img9) {
      img9.src = foursomeTabImage;
    }
    var foursomeScorecardImage = GT_DATA[currentGameType].img13;
    // Update image
    const img10 = document.getElementById('foursomeScorecardImg');
    if (img10) {
      img10.src = foursomeScorecardImage;
    }
    var foursomeWinnersImage = GT_DATA[currentGameType].img14;
    // Update image
    const img11 = document.getElementById('foursomeWinnersImg');
    if (img11) {
      img11.src = foursomeWinnersImage;
    }


    //Show Leadger Screen
    var ledgerPageViewImage = GT_DATA[currentGameType].img15;
    // Update image
    const img12 = document.getElementById('ledgerPageViewImg');
    if (img12) {
      img12.src = ledgerPageViewImage;
    }

    // ── GLOBAL GAME TYPE DATA ──
    var GT_SECTIONS = {
      '321milo': {
        icon: '🎯', name: '321 Milo',
        // View Game
        vgContextTitle: '321 Milo — Game Overview',
        vgContextDesc: 'Shows COD-based matches, 6-hole groupings, team carts, Skode & Junk pools, and the real-time match leaderboard.',
        vgImg: 'images/321MiloGameOverview.png',
        vgFeatures: [
          {cls:'bg-primary-soft',icon:'bi-info-circle',title:'Game Details',desc:'Game name, type (321 Milo), COD/2v2/Random mode, date & time.'},
          {cls:'bg-success-soft',icon:'bi-map',title:'Course Details',desc:'Selected course info, tee sheet, and hole layout.'},
          {cls:'bg-warning-soft',icon:'bi-people',title:'Foursome & Carts',desc:'Players grouped into foursomes with Cart 1 / Cart 2 assignments.'},
          {cls:'bg-red-soft',icon:'bi-cash-coin',title:'Match Amounts',desc:'Bet per match, Skode pool, Junk pool — pre-configured amounts.'}
        ],
        vgExtra: '<div class="info-box info-box-success"><div class="info-icon"><i class="bi bi-lightbulb"></i></div><div class="info-content"><h5>321 Milo Specific</h5><p>The overview shows <strong>6-hole match groupings</strong> with real-time scores per match. Tap any match to see the current hole-by-hole result for that 6-hole set.</p></div></div>',
        // Add Score
        asContextTitle: '321 Milo — Score Entry Flow (12 Steps)',
        asContextDesc: 'Select Foursome → Generate Matches → Match Config → Foursome Setting → Foursome Settings → Add Score → Holes Grid → Scorecard → Skode & Junk → Leaderboard → Results → All Holes Done',
        asSubtitle: 'Enter player scores — 12 steps (321 Milo COD flow).',
        asIntroTitle: 'Score Entry Flow — 12 Steps (321 Milo)',
        asIntroDesc: 'Tap <strong>Add Score</strong> from the Game Overview Tab to begin. Click any step tab to jump to it, or use the <strong>Next / Back</strong> arrows.',
        asGameTypeNote: 'Based on the selected game type (<strong>321 Milo</strong>), the scoring flow includes cart/driver setup and match generation steps before the score grid opens.',
        asPanel: '321milo'
      },
      'calcutta': {
        icon: '🏆', name: 'Calcutta',
        vgContextTitle: 'Calcutta — Game Overview',
        vgContextDesc: 'Shows auction buy-in pool, team bids, player assignments, full 18-hole stroke-play format, and prize pool breakdown.',
        vgImg: 'images/321MiloGameOverview.png',
        vgFeatures: [
          {cls:'bg-primary-soft',icon:'bi-info-circle',title:'Game Details',desc:'Game name, type (Calcutta), auction mode, start date & time.'},
          {cls:'bg-success-soft',icon:'bi-map',title:'Course Details',desc:'Full 18-hole course, tee sheet, and player handicaps.'},
          {cls:'bg-warning-soft',icon:'bi-trophy',title:'Auction Pool',desc:'Total buy-in collected, teams and their auction bids, and payout structure.'},
          {cls:'bg-red-soft',icon:'bi-receipt',title:'Payment Info',desc:'Per-player buy-in amounts and Junk pool contributions.'}
        ],
        vgExtra: '<div class="info-box info-box-primary"><div class="info-icon"><i class="bi bi-info-circle"></i></div><div class="info-content"><h5>Calcutta Specific</h5><p>The overview shows the <strong>auction pool total</strong> and all team bids. The leaderboard updates after each foursome submits scores, with prize pool distribution calculated from the auction results.</p></div></div>',
        asContextTitle: 'Calcutta — Score Entry Flow (8 Steps)',
        asContextDesc: 'Select Foursome → Foursome Settings → Tap Add Score → 18-Hole Grid → Scorecard → Skode & Junk → View Results → All Holes Done',
        asSubtitle: 'Enter player scores — 8 steps (Calcutta stroke-play).',
        asIntroTitle: 'Score Entry Flow — 8 Steps (Calcutta)',
        asIntroDesc: 'Standard stroke-play across all 18 holes. Tap <strong>Add Score</strong> from the Game Overview to begin.',
        asGameTypeNote: 'Calcutta uses standard stroke-play scoring. All 18 holes are played and the prize pool distribution is calculated from the auction buy-in structure.',
        asPanel: 'calcutta'
      },
      'progskins': {
        icon: '⛳', name: 'Progressive Skins',
        vgContextTitle: 'Progressive Skins — Game Overview',
        vgContextDesc: 'Shows hole-by-hole skin values, carry-over indicators, individual player standings, and accumulated skin pot per hole.',
        vgImg: 'images/321MiloGameOverview.png',
        vgFeatures: [
          {cls:'bg-primary-soft',icon:'bi-info-circle',title:'Game Details',desc:'Game name, type (Progressive Skins), play format, date & time.'},
          {cls:'bg-success-soft',icon:'bi-arrow-repeat',title:'Skin Carry-Over',desc:'Live carry-over count per hole — tied holes accumulate to the next.'},
          {cls:'bg-warning-soft',icon:'bi-people',title:'Individual Players',desc:'All players compete individually — no teams or foursomes required.'},
          {cls:'bg-red-soft',icon:'bi-cash-coin',title:'Skin Value',desc:'Dollar value per skin — tied holes carry over and multiply the payout.'}
        ],
        vgExtra: '<div class="info-box info-box-warning"><div class="info-icon"><i class="bi bi-info-circle"></i></div><div class="info-content"><h5>Progressive Skins Specific</h5><p>The overview shows the <strong>current skin pot per hole</strong>. When multiple holes tie, the accumulated value is displayed as a carry-over pot — creating high-value opportunities on later holes.</p></div></div>',
        asContextTitle: 'Progressive Skins — Score Entry Flow (8 Steps)',
        asContextDesc: 'Select Foursome → Foursome Settings → Tap Add Score → 18-Hole Grid → Scorecard → Skode & Junk → Live Skins Leaderboard → All Holes Done',
        asSubtitle: 'Enter player scores — 8 steps (Progressive Skins carry-over).',
        asIntroTitle: 'Score Entry Flow — 8 Steps (Progressive Skins)',
        asIntroDesc: 'Hole-by-hole skins with carry-over on ties. Tap <strong>Add Score</strong> from the Game Overview to begin.',
        asGameTypeNote: 'Progressive Skins tracks hole wins and carry-over pots. Tied holes roll their value to the next hole — the accumulated pot is awarded when a player wins outright.',
        asPanel: 'progskins'
      }
    };

    // ── ADDITIONAL GAME TYPES ──
    // These reuse the 321 Milo screens & layout as placeholders (no dedicated
    // screenshots exist yet) but carry their own names, play types and notes.
    var DEFAULT_PLAYS = ['COD','2v2','Random','4v4','Cards','Ultra Vegas','1v1','Individual','Modified Stableford'];

    function buildBadges(active) {
      var badges = active.map(function(l, i){ return { label: i === 0 ? l + ' ✓' : l, active: true }; });
      DEFAULT_PLAYS.forEach(function(l){
        if (active.indexOf(l) === -1) badges.push({ label: l, active: false });
      });
      return badges;
    }

    function buildGTData(cfg) {
      var base = GT_DATA['321milo'];
      return {
        name: cfg.name,
        img3: base.img3, img4: base.img4, img6: base.img6, img7: base.img7, img9: base.img9,
        img10: base.img10, img11: base.img11, img12: base.img12, img13: base.img13, img14: base.img14, img15: base.img15,
        playTypeBadges: buildBadges(cfg.plays),
        playTypeNote: '<strong>' + cfg.name + '</strong> — ' + cfg.note +
          '<br/><span style="font-size:.7rem;opacity:.8">Greyed-out options are not available for ' + cfg.name + '.</span>',
        holesDetail: base.holesDetail,
        amountFields: base.amountFields,
        pointsFields: base.pointsFields
      };
    }

    function buildGTSection(cfg) {
      return {
        icon: cfg.icon, name: cfg.name,
        vgContextTitle: cfg.name + ' — Game Overview',
        vgContextDesc: cfg.vgDesc,
        vgImg: 'images/321MiloGameOverview.png',
        vgFeatures: [
          { cls:'bg-primary-soft', icon:'bi-info-circle', title:'Game Details', desc:'Game name, type (' + cfg.name + '), play format, date & time.' },
          { cls:'bg-success-soft', icon:'bi-map', title:'Course Details', desc:'Selected course, tee sheet, and hole layout.' },
          { cls:'bg-warning-soft', icon:'bi-people', title:'Players & Teams', desc:cfg.playersDesc },
          { cls:'bg-red-soft', icon:'bi-cash-coin', title:'Stakes & Pools', desc:'Bet amounts, side pools, and payout configuration for this format.' }
        ],
        vgExtra: '<div class="info-box info-box-primary"><div class="info-icon"><i class="bi bi-info-circle"></i></div>' +
          '<div class="info-content"><h5>' + cfg.name + ' Specific</h5><p>' + cfg.specific + '</p></div></div>',
        asContextTitle: cfg.name + ' — Score Entry Flow',
        asContextDesc: cfg.asDesc,
        asSubtitle: 'Enter player scores — ' + cfg.name + ' flow.',
        asIntroTitle: 'Score Entry Flow — ' + cfg.name,
        asIntroDesc: 'Tap <strong>Add Score</strong> from the Game Overview to begin. Click any step tab to jump to it, or use the <strong>Next / Back</strong> arrows.',
        asGameTypeNote: cfg.asNote,
        asPanel: '321milo' // reuse the default rich score panel as a fallback
      };
    }

    var EXTRA_GAME_TYPES = [
//      {
//        key:'regular_skins', icon:'💰', name:'Regular Skins',
//        plays:['Individual','1v1'],
//        note:'each hole is worth one skin and the outright low score wins it. Tied holes are simply pushed — there is no carry-over.',
//        vgDesc:'Shows per-hole skin winners, individual standings, and the total skins won by each player across 18 holes.',
//        playersDesc:'All players compete individually for one skin per hole.',
//        specific:'Each hole awards <strong>one skin</strong> to the outright low scorer. Tied holes are voided with <strong>no carry-over</strong>, so every hole is a fresh contest.',
//        asDesc:'Select Foursome → Foursome Settings → Tap Add Score → 18-Hole Grid → Scorecard → Skode & Junk → Skins Leaderboard → All Holes Done',
//        asNote:'Regular Skins awards one skin per hole to the outright low scorer. Tied holes are voided — no carry-over to the next hole.'
//      },
      /*{
        key:'ryder_cup', icon:'🏌️', name:'Ryder Cup',
        plays:['2v2','1v1'],
        note:'a team match-play format. Each hole or match won earns a point for that side, and the team with the most points wins.',
        vgDesc:'Shows the two teams, head-to-head pairings, per-hole match status, and the running team points total.',
        playersDesc:'Players are split into two teams competing in match-play pairings.',
        specific:'Scoring is <strong>match play between two teams</strong>. Holes won convert to team points, and the side with the higher points total takes the cup.',
        asDesc:'Select Pairing → Pairing Settings → Tap Add Score → 18-Hole Grid → Match Status → Skode & Junk → Team Points Board → All Holes Done',
        asNote:'Ryder Cup uses match-play scoring between two teams. Each hole or match won earns a point for the winning side.'
      },*/
//      {
//        key:'vegas', icon:'🎰', name:'Vegas',
//        plays:['2v2'],
//        note:"partners' scores are combined into a two-digit team number (low digit first). The gap between the two team numbers sets the points swing.",
//        vgDesc:'Shows paired teams, the combined Vegas number per hole, the running point differential, and the dollar-per-point stake.',
//        playersDesc:'Players are paired into teams; each pair forms a combined number per hole.',
//        specific:'Each pair\'s two scores form a <strong>combined team number</strong> (low-high). The difference between the two team numbers is the points won or lost on that hole.',
//        asDesc:'Select Pairing → Pairing Settings → Tap Add Score → 18-Hole Grid → Vegas Numbers → Skode & Junk → Point Differential → All Holes Done',
//        asNote:'Vegas combines each pair\'s scores into a team number per hole; the gap between the two team numbers determines points won or lost.'
//      },
      {
        key:'horse_race', icon:'🐎', name:'Horse Race',
        plays:['Individual'],
        note:'an elimination shootout — the worst score on each contested hole is knocked out until a single winner remains.',
        vgDesc:'Shows the elimination bracket, who is still in play, the current hole being contested, and the prize for the last player standing.',
        playersDesc:'All players start in; the field shrinks each hole as the worst score is eliminated.',
        specific:'Players are <strong>eliminated hole by hole</strong> — the highest score on each contested hole drops out until one player is left standing to win the pot.',
        asDesc:'Select Field → Field Settings → Tap Add Score → Contested-Hole Grid → Elimination Status → Skode & Junk → Last Player Standing → Done',
        asNote:'Horse Race eliminates the highest scorer on each contested hole. Enter scores per hole until a single player remains.'
      },
//      {
//        key:'wolf', icon:'🐺', name:'Wolf',
//        plays:['Individual','2v2'],
//        note:'the "Wolf" rotates each hole and picks a partner after the tee shots, or goes "Lone Wolf" for higher stakes.',
//        vgDesc:'Shows the current Wolf, partner selections per hole, lone-wolf calls, and the running points and dollar tally.',
//        playersDesc:'A rotating Wolf chooses a partner each hole or plays alone against the field.',
//        specific:'The <strong>Wolf rotates every hole</strong>. The Wolf either picks a partner after watching tee shots or declares <strong>Lone Wolf</strong> to play 1-vs-field for double points.',
//        asDesc:'Select Foursome → Wolf Order → Tap Add Score → Partner / Lone-Wolf Call → 18-Hole Grid → Skode & Junk → Points Board → Done',
//        asNote:'Wolf rotates the lead player each hole. Record the Wolf\'s partner choice (or Lone Wolf) before entering hole scores.'
//      },
     /* {
        key:'scramble', icon:'🤝', name:'Scramble',
        plays:['2v2','4v4'],
        note:'all teammates tee off, the best shot is chosen, and everyone plays from there — one team score is recorded per hole.',
        vgDesc:'Shows teams, the single team score per hole, and the combined team total across all 18 holes.',
        playersDesc:'Players form teams that record one combined score per hole.',
        specific:'Teammates all play from the <strong>best available shot</strong> each stroke, recording a <strong>single team score</strong> per hole. Lowest team total wins.',
        asDesc:'Select Team → Team Settings → Tap Add Score → 18-Hole Team Grid → Scorecard → Skode & Junk → Team Leaderboard → Done',
        asNote:'Scramble records one combined score per team per hole — the team plays each shot from the best available ball.'
      },*/
      /*{
        key:'stableford', icon:'📊', name:'Stableford',
        plays:['Individual','Modified Stableford'],
        note:'points are awarded per hole based on score relative to par (e.g. birdie = 3, par = 2, bogey = 1). Highest points total wins.',
        vgDesc:'Shows the per-hole Stableford points table, individual running totals, and the points-to-par reference.',
        playersDesc:'All players compete individually, accumulating points per hole.',
        specific:'Each hole\'s score is converted into <strong>points versus par</strong>. Unlike stroke play, the <strong>highest points total wins</strong>, so blow-up holes hurt less.',
        asDesc:'Select Foursome → Foursome Settings → Tap Add Score → 18-Hole Grid → Points Conversion → Skode & Junk → Points Leaderboard → Done',
        asNote:'Stableford converts each hole\'s score into points versus par. Enter strokes per hole and points are calculated automatically.'
      },*/
//      {
//        key:'stroke_play', icon:'🔢', name:'Stroke Play',
//        plays:['Individual'],
//        note:'the simplest format — every stroke counts and the lowest total across all 18 holes wins.',
//        vgDesc:'Shows each player\'s gross total, hole-by-hole strokes, and a live leaderboard sorted by lowest total.',
//        playersDesc:'All players compete individually on total strokes.',
//        specific:'Every stroke is counted. The player with the <strong>lowest gross total</strong> over 18 holes wins — no handicap adjustment is applied.',
//        asDesc:'Select Foursome → Foursome Settings → Tap Add Score → 18-Hole Grid → Scorecard → Skode & Junk → Gross Leaderboard → Done',
//        asNote:'Stroke Play counts every stroke across 18 holes. Enter the gross score for each hole; the lowest total wins.'
//      },
      {
        key:'medal_play', icon:'🥇', name:'Medal Play',
        plays:['Individual'],
        note:'stroke play scored on both gross and net (after handicap) — the lowest net total typically decides the winner.',
        vgDesc:'Shows gross and net totals per player, handicap strokes applied per hole, and the net leaderboard.',
        playersDesc:'All players compete individually on gross and handicap-adjusted net totals.',
        specific:'Medal Play tracks <strong>gross and net</strong> scores. Handicap strokes are applied per hole to produce a net total, and the <strong>lowest net</strong> usually wins.',
        asDesc:'Select Foursome → Foursome Settings → Tap Add Score → 18-Hole Grid → Gross / Net → Skode & Junk → Net Leaderboard → Done',
        asNote:'Medal Play records gross strokes per hole and applies handicaps to produce a net total. Lowest net wins.'
      }
    ];

    EXTRA_GAME_TYPES.forEach(function(cfg){
      GT_DATA[cfg.key] = buildGTData(cfg);
      GT_SECTIONS[cfg.key] = buildGTSection(cfg);
    });

    window.setGameType = function(type, btn) {
      currentGameType = type;
      // update selector button states
      document.querySelectorAll('#gtBtnGroup .gt-btn').forEach(function(b){ b.classList.remove('active'); });
      if (btn) btn.classList.add('active');
      // update active name label
      var nameEl = document.getElementById('gtActiveName');
      if (nameEl) nameEl.textContent = GT_DATA[type].name;

      //change game create image
      currentGameCreateImage = GT_DATA[type].img3;
      // Update image
      const img = document.getElementById('createGameImg');
      if (img) {
        img.src = currentGameCreateImage;
      }

      //set match details screen
      setMatchDetailsImage = GT_DATA[type].img4;
      // Update image
      const img1 = document.getElementById('setMatchDetailsImg');
      if (img1) {
        img1.src = setMatchDetailsImage;
      }

      //set per match hole screen
      setPerMatchHolesImage = GT_DATA[type].img5;
      // Update image
      const img2 = document.getElementById('setPerMatchHolesImg');
      if (img2) {
        img2.src = setPerMatchHolesImage;
      }

      //set amount for each match screen
      setAmountforEachImage = GT_DATA[type].img6;
      // Update image
      const img3 = document.getElementById('setAmountforEachImg');
      if (img3) {
        img3.src = setAmountforEachImage;
      }

      //set amount for each match screen
      setPointsImage = GT_DATA[type].img7;
      // Update image
      const img4 = document.getElementById('setPointsImg');
      if (img4) {
        img4.src = setPointsImage;
      }

      //set amount for each match screen
      gameCreatedSuccessImage = GT_DATA[type].img8;
      // Update image
      const img5 = document.getElementById('gameCreatedSuccessImg');
      if (img5) {
        img5.src = gameCreatedSuccessImage;
      }

      //Game Details screen
      gameOverviewImage = GT_DATA[currentGameType].img9;
      // Update image
      const img6 = document.getElementById('gameOverviewImg');
      if (img6) {
        img6.src = gameOverviewImage;
      }

      //Add Bets screen
      addBetsScreenImage = GT_DATA[currentGameType].img10;
      // Update image
      const img7 = document.getElementById('addBetsScreenImg');
      if (img7) {
        img7.src = addBetsScreenImage;
      }

      //Show Results Screen
      allPlayersResultImage = GT_DATA[currentGameType].img11;
      // Update image
      const img8 = document.getElementById('allPlayersResultImg');
      if (img8) {
        img8.src = allPlayersResultImage;
      }
      foursomeTabImage = GT_DATA[currentGameType].img12;
      // Update image
      const img9 = document.getElementById('foursomeTabImg');
      if (img9) {
        img9.src = foursomeTabImage;
      }
      foursomeScorecardImage = GT_DATA[currentGameType].img13;
      // Update image
      const img10 = document.getElementById('foursomeScorecardImg');
      if (img10) {
        img10.src = foursomeScorecardImage;
      }
      foursomeWinnersImage = GT_DATA[currentGameType].img14;
      // Update image
      const img11 = document.getElementById('foursomeWinnersImg');
      if (img11) {
        img11.src = foursomeWinnersImage;
      }

      //Show Leadger Screen
      ledgerPageViewImage = GT_DATA[currentGameType].img15;
      // Update image
      const img12 = document.getElementById('ledgerPageViewImg');
      if (img12) {
        img12.src = ledgerPageViewImage;
      }

      // update Create Game dynamic content
      applyGameTypeContent(type);
      // update View Game & Add Score sections
      applyGlobalGameType(type);
    };
    function applyGlobalGameType(type) {
      var s = GT_SECTIONS[type];
      if (!s) return;
      var d = GT_DATA[type];

      // ── Section badges ──
      ['vgBadge','asBadge'].forEach(function(id){
        var el = document.getElementById(id);
        if (el) el.textContent = s.icon + ' ' + s.name;
      });

      // ── VIEW GAME ──
      var vgCtxTitle = document.getElementById('vgContextTitle');
      if (vgCtxTitle) vgCtxTitle.textContent = s.vgContextTitle;
      var vgCtxDesc = document.getElementById('vgContextDesc');
      if (vgCtxDesc) vgCtxDesc.textContent = s.vgContextDesc;
      var vgCtxIcon = document.getElementById('vgContextIcon');
      if (vgCtxIcon) vgCtxIcon.textContent = s.icon;
      var vgImg = document.getElementById('vgImg');
      if (vgImg) { vgImg.src = s.vgImg; vgImg.classList.remove('gt-flash'); void vgImg.offsetWidth; vgImg.classList.add('gt-flash'); }
      var vgFG = document.getElementById('vgFeatureGrid');
      if (vgFG) {
        vgFG.innerHTML = s.vgFeatures.map(function(f){
          return '<div class="feature-item"><div class="feature-icon '+f.cls+'"><i class="bi '+f.icon+'"></i></div><h4>'+f.title+'</h4><p>'+f.desc+'</p></div>';
        }).join('');
      }
      var vgExtra = document.getElementById('vgExtraInfo');
      if (vgExtra) { vgExtra.innerHTML = s.vgExtra; }

      // ── ADD SCORE ──
      var asSubtitle = document.getElementById('asSubtitle');
      if (asSubtitle) asSubtitle.innerHTML = s.asSubtitle + ' <span class="gt-section-badge" id="asBadge">'+s.icon+' '+s.name+'</span>';
      var asCtxTitle = document.getElementById('asContextTitle');
      if (asCtxTitle) asCtxTitle.textContent = s.asContextTitle;
      var asCtxDesc = document.getElementById('asContextDesc');
      if (asCtxDesc) asCtxDesc.textContent = s.asContextDesc;
      var asCtxIcon = document.getElementById('asContextIcon');
      if (asCtxIcon) asCtxIcon.textContent = s.icon;
      var asIntroTitle = document.getElementById('asIntroTitle');
      if (asIntroTitle) asIntroTitle.textContent = s.asIntroTitle;
      var asIntroDesc = document.getElementById('asIntroDesc');
      if (asIntroDesc) asIntroDesc.innerHTML = s.asIntroDesc;
      var asNote = document.getElementById('asGameTypeNote');
      if (asNote) asNote.innerHTML = s.asGameTypeNote;
      // switch score panels
      ['321milo','calcutta','progskins'].forEach(function(t){
        var panel = document.getElementById('asPanel-'+t);
        if (panel) panel.style.display = (t === s.asPanel) ? '' : 'none';
      });

      // ── flash View Game card ──
      var vgSection = document.getElementById('view-game');
      if (vgSection) { vgSection.classList.remove('gt-flash'); void vgSection.offsetWidth; vgSection.classList.add('gt-flash'); }
    }
    function applyGameTypeContent(type) {
      var d = GT_DATA[type];

      // Slide 5 — holes desc
           var d5 = document.getElementById('cg-desc-5');
           if (d5) {
               d5.innerHTML = d.holesDesc || '';
           }
      // Slide 6 — Amount For Each
           var d6 = document.getElementById('cg-desc-6');
           if (d6) {
               d6.innerHTML = d.amountForEach || '';
           }
      // Slide 7 — Points Set
           var d7 = document.getElementById('cg-desc-7');
           if (d7) {
               d7.innerHTML = d.setPointsScreen || '';
           }
      // Slide 9 — Game Created Successfully
      // Title
           var d9 = document.getElementById('cg-desc-9');
           if (d9) {
               d9.innerHTML = d.gameCreatedTitle || '';
           }
      //Footer
           var d91 = document.getElementById('cg-desc-9.1');
           if (d91) {
               d91.innerHTML = d.gameCreatedFooter || '';
           }

      /* add score flow */
      // Add Score Titles
                 var addScoreTitle1 = document.getElementById('addScoreTitle1');
                 if (addScoreTitle1) {
                     addScoreTitle1.innerHTML = d.addScoreTitle1 || '';
                 }
                 var addScoreTitle2 = document.getElementById('addScoreTitle2');
                 if (addScoreTitle2) {
                     addScoreTitle2.innerHTML = d.addScoreTitle2 || '';
                 }
      // Add Score Stepers
                 var addScoreSteper = document.getElementById('gameTypeViseSteps');
                 if (addScoreSteper) {
                     addScoreSteper.innerHTML = d.addScoreSteper || '';
                 }
      //hide or show showAddScoreMatchSlide123
                 var showAddScoreMatchSlide123 = document.getElementById('showAddScoreMatchSlide123');
                 if (showAddScoreMatchSlide123) {
                     showAddScoreMatchSlide123.innerHTML = d.showAddScoreMatchSlide123 || '';
                 }



      // images
      var imgSlots = {2:'cgImg-2', 5:'cgImg-5', 6:'cgImg-6', 7:'cgImg-7', 9:'cgImg-9'};
      var imgs = {2:d.img3, 5:d.img4, 6:d.img6, 7:d.img7, 9:d.img9};
      for (var k in imgSlots) {
        var el = document.getElementById(imgSlots[k]);
        if (el) { el.src = imgs[k]; }
      }
      // play type badges
      var badgesEl = document.getElementById('cgPlayTypeBadges');
      if (badgesEl) {
        badgesEl.innerHTML = d.playTypeBadges.map(function(b){
          return b.active
            ? '<span style="background:#dcfce7;color:#15803d;font-size:.68rem;font-weight:700;padding:3px 9px;border-radius:4px">'+b.label+'</span>'
            : '<span style="background:#f1f5f2;color:var(--ink-faint);font-size:.68rem;font-weight:500;padding:3px 9px;border-radius:4px;opacity:.45">'+b.label+'</span>';
        }).join('');
      }
      // play type note
      var noteEl = document.getElementById('cgPlayTypeNote');
      if (noteEl) noteEl.innerHTML = d.playTypeNote;
      //vegas changes
      if(type == 'vegas'){
      var ultraVegasSwitch = document.getElementById('ultraVegasSwitch');
      if (ultraVegasSwitch) {
      ultraVegasSwitch.innerHTML = `<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px 14px" >
                                                                                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
                                                                                      <span style="background:var(--brand);color:#fff;font-size:.65rem;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:.04em;text-transform:uppercase">Required</span>
                                                                                      <span style="font-size:.88rem;font-weight:700;color:var(--ink)">Ultra Vegas</span>
                                                                                    </div>
                                                                                    <p style="font-size:.8rem;color:var(--ink-muted);line-height:1.6;margin:0">
                                                                                      The default setting is <strong>On</strong>. When enabled, the game will be created as
                                                                                      <strong>Ultra Vegas</strong>, and both <strong>Score</strong> and <strong>Putts</strong>
                                                                                      fields will be available during score entry. When disabled, the game will be created as
                                                                                      <strong>Vegas</strong>, and only the <strong>Score</strong> field will be available.
                                                                                    </p>
                                                                                  </div>`;
      }
      }else{
      var ultraVegasSwitch = document.getElementById('ultraVegasSwitch');
            if (ultraVegasSwitch) ultraVegasSwitch.innerHTML = ``;
      }
      //wolf changes
      if(type == 'wolf'){
      var wolfTitleChanges = document.getElementById('wolfTitleChanges');
      if(wolfTitleChanges){
      wolfTitleChanges.innerHTML = `Define how many holes will be played per match. For this game type, matches are played over <strong>18 holes only</strong>, and this option is selected by default.`;
      }
      }else{
      var wolfTitleChanges = document.getElementById('wolfTitleChanges');
            if (wolfTitleChanges) wolfTitleChanges.innerHTML = `Define how many holes will be played per match. The course is divided into three sections — you can select which section to play, and the default is already pre-selected.`;
      }
      // holes detail
      var holesEl = document.getElementById('cgHolesDetail');
      if (holesEl) holesEl.innerHTML = d.holesDetail;
      // amount fields
      var amtEl = document.getElementById('cgAmountFields');
      if (amtEl) { amtEl.innerHTML = d.amountFields; }
      // points fields
      var ptsEl = document.getElementById('cgPointsFields');
      if (ptsEl) { ptsEl.innerHTML = d.pointsFields; }
      // flash animation on slides 3,5,6,7,9
      [3,5,6,7,9].forEach(function(i){
        var s = document.getElementById('cgslide-'+i);
        if (s) { s.classList.remove('gt-flash'); void s.offsetWidth; s.classList.add('gt-flash'); }
      });
    }

    applyGameTypeContent('321milo');
    applyGlobalGameType('321milo');


// new flow for add score

//alert(window.NUM_AS);
//window.NUM_AS = 5;

