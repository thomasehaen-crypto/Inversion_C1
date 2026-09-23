/* Inversion Mastery
   Static, dependency-free app. Progress is stored in localStorage.
   Suitable for GitHub Pages: push this folder and enable Pages.
*/
const LEVELS = [
{
 id:1,title:"Spot the Structure",subtitle:"Recognise when inversion is required and identify the trigger.",skill:"ANALYSIS",
 pass:0.8,
 items:[
  {type:"mc",prompt:"Which sentence uses inversion correctly?",options:[
   "Never I have seen such a crowded station.","Never have I seen such a crowded station.","Never I saw such a crowded station.","Never did I have seen such a crowded station."
  ],answer:1,rule:"Negative adverbial 'never' is fronted, so the auxiliary comes before the subject."},
  {type:"mc",prompt:"Which sentence is grammatically correct?",options:[
   "Only then I understood the seriousness of the situation.","Only then did I understood the seriousness of the situation.","Only then did I understand the seriousness of the situation.","Only then I did understand the seriousness of the situation."
  ],answer:2,rule:"After fronted 'only then', use auxiliary + subject + base verb: did I understand."},
  {type:"mc",prompt:"Which opening most strongly requires inversion in formal English?",options:["Usually","At no time","Yesterday","Perhaps"],answer:1,rule:"Negative/restrictive fronted expressions such as 'at no time' trigger subject–auxiliary inversion."},
  {type:"mc",prompt:"Choose the correct form.",options:["Rarely I have encountered such resistance.","Rarely have I encountered such resistance.","Rarely did I have encountered such resistance.","Rarely have encountered I such resistance."],answer:1,rule:"With present perfect, move 'have' before the subject: Rarely have I encountered…"},
  {type:"mc",prompt:"What is the key structural change in 'Not until midnight did the results arrive'?",options:["The main verb moves before the subject.","An auxiliary moves before the subject.","The subject is omitted.","The tense changes to the past perfect."],answer:1,rule:"The auxiliary 'did' is placed before the subject; the lexical verb remains in the base form."},
  {type:"mc",prompt:"Which sentence is NOT an example of the target fronted inversion?",options:["Seldom do we see such dedication.","Little did she realise the consequences.","Under no circumstances should you open the door.","We rarely see such dedication."],answer:3,rule:"The final sentence has normal word order. The adverb 'rarely' is not fronted."}
 ]},
{
 id:2,title:"Build the Inversion",subtitle:"Put the scrambled words into the correct order. More than one natural sentence may be possible.",skill:"SYNTHESIS",
 pass:0.8,
 items:[
  {type:"order",prompt:"Rebuild the sentence.",words:["Never","have","I","experienced","anything","like","this"],answer:"Never have I experienced anything like this.",rule:"Never + auxiliary + subject + main verb."},
  {type:"order",prompt:"Rebuild the sentence.",words:["Not","until","dawn","did","we","discover","the","mistake"],answer:"Not until dawn did we discover the mistake.",rule:"Not until + time expression + did + subject + base verb."},
  {type:"order",prompt:"Rebuild the sentence.",words:["Little","did","he","know","what","awaited","him"],answer:"Little did he know what awaited him.",rule:"Little did + subject + base verb is a fixed inversion pattern meaning 'he was unaware…'."},
  {type:"order",prompt:"Rebuild the sentence.",words:["At","no","time","was","the","decision","explained","to","us"],answer:"At no time was the decision explained to us.",rule:"At no time + be + subject + complement/participle."},
  {type:"order",prompt:"Rebuild the sentence.",words:["Only","after","the","meeting","did","she","reveal","the","truth"],answer:"Only after the meeting did she reveal the truth.",rule:"Only + fronted phrase + did + subject + base verb."},
  {type:"order",prompt:"Rebuild the sentence.",words:["Under","no","circumstances","should","you","disclose","this","information"],answer:"Under no circumstances should you disclose this information.",rule:"A negative/restrictive fronted phrase triggers modal + subject + base verb."}
 ]},
{
 id:3,title:"Type It",subtitle:"Produce the missing structure yourself — no answer choices.",skill:"PRODUCTION",
 pass:0.8,
 items:[
  {type:"text",prompt:"Complete the sentence with the correct inverted form.",sentence:"Never ______ I felt so relieved.",answer:"have",full:"Never have I felt so relieved.",rule:"The present perfect auxiliary 'have' precedes the subject 'I'."},
  {type:"text",prompt:"Complete the sentence.",sentence:"Not until the next morning ______ we realise what had happened.",answer:"did",full:"Not until the next morning did we realise what had happened.",rule:"Past simple inversion uses 'did' + subject + base verb."},
  {type:"text",prompt:"Complete the sentence.",sentence:"Little ______ she know that the letter would change everything.",answer:"did",full:"Little did she know that the letter would change everything.",rule:"'Little did + subject + base verb' is a conventional inversion pattern."},
  {type:"text",prompt:"Complete the sentence.",sentence:"At no time ______ he admit that he had made a mistake.",answer:"did",full:"At no time did he admit that he had made a mistake.",rule:"Past simple 'did' moves before the subject."},
  {type:"text",prompt:"Complete the sentence.",sentence:"Only then ______ I understand why she had refused.",answer:"did",full:"Only then did I understand why she had refused.",rule:"After fronted 'only then', use did + subject + base verb."},
  {type:"text",prompt:"Complete the sentence.",sentence:"Seldom ______ we been offered such an opportunity.",answer:"have",full:"Seldom have we been offered such an opportunity.",rule:"Present perfect inversion: have + subject + past participle."}
 ]},
{
 id:4,title:"Transform It",subtitle:"Rewrite whole sentences while preserving meaning and the given word.",skill:"TRANSFORMATION",
 pass:0.8,
 items:[
  {type:"transform",prompt:"Rewrite using NEVER. Do not change the given word.",given:"never",source:"I have never seen such a chaotic departure lounge.",answer:"Never have I seen such a chaotic departure lounge.",rule:"Front 'never' and invert the present-perfect auxiliary 'have'."},
  {type:"transform",prompt:"Rewrite using ANYONE. Do not change the given word.",given:"anyone",source:"Nobody from the department has written a clearer report.",answer:"Never has anyone from the department written a clearer report.",rule:"'Never has anyone…' preserves the negative meaning while triggering inversion."},
  {type:"transform",prompt:"Rewrite using GREAT. Do not change the given word.",given:"great",source:"The demand for tickets was so great that people queued all night.",answer:"So great was the demand for tickets that people queued all night.",rule:"So + adjective + be + subject is a formal emphatic inversion pattern."},
  {type:"transform",prompt:"Rewrite using NO. Do not change the given word.",given:"no",source:"The money is not to be paid under any circumstances.",answer:"Under no circumstances is the money to be paid.",rule:"Under no circumstances + auxiliary/be + subject."},
  {type:"transform",prompt:"Rewrite using HAD. Do not change the given word.",given:"had",source:"We arrived at the first oasis only after three days had passed.",answer:"Not until three days had passed did we arrive at the first oasis.",rule:"Fronting a negative time expression creates inversion; the embedded past perfect stays intact."},
  {type:"transform",prompt:"Rewrite using DID. Do not change the given word.",given:"did",source:"I realised something was wrong only when I stopped.",answer:"Only when I stopped did I realise something was wrong.",rule:"Only + when-clause at the front requires did + subject + base verb."},
  {type:"transform",prompt:"Rewrite using TIME. Do not change the given word.",given:"time",source:"The accused never expressed regret for what he had done.",answer:"At no time did the accused express regret for what he had done.",rule:"'At no time' is a formal negative fronted expression requiring inversion."},
  {type:"transform",prompt:"Rewrite using WERE. Do not change the given word.",given:"were",source:"Exhaustion prevented all the runners from finishing the race.",answer:"So exhausted were the runners that none of them finished the race.",rule:"So + adjective + were + subject creates emphatic inversion."}
 ]},
{
 id:5,title:"Diagnose the Error",subtitle:"Explain exactly what is wrong, then repair it.",skill:"ERROR ANALYSIS",
 pass:0.8,
 items:[
  {type:"diagnose",prompt:"A learner wrote: 'Never I have seen such a bizarre reaction.' What is wrong and how would you correct it?",answer:"Never have I seen such a bizarre reaction.",issues:["auxiliary placement"],rule:"The fronted negative adverbial 'never' triggers inversion: have + subject, not subject + have."},
  {type:"diagnose",prompt:"A learner wrote: 'Not until Friday did we finally discovered the problem.' Correct it and identify the error.",answer:"Not until Friday did we finally discover the problem.",issues:["base-form after did"],rule:"After 'did', the main verb must be in the base form: discover, not discovered."},
  {type:"diagnose",prompt:"A learner wrote: 'Only after the interview I understood the problem.' Correct it.",answer:"Only after the interview did I understand the problem.",issues:["missing inversion"],rule:"A fronted restrictive 'only' expression requires auxiliary + subject inversion."},
  {type:"diagnose",prompt:"A learner wrote: 'Rarely does she complains about the workload.' Correct it.",answer:"Rarely does she complain about the workload.",issues:["base-form after does"],rule:"After 'does', use the base form complain."},
  {type:"diagnose",prompt:"A learner wrote: 'At no time was he admit responsibility.' Correct it.",answer:"At no time did he admit responsibility.",issues:["wrong auxiliary","base-form after auxiliary"],rule:"With a lexical verb in the past simple, use did + subject + base verb."},
  {type:"diagnose",prompt:"A learner wrote: 'Little did she realised how serious it was.' Correct it.",answer:"Little did she realise how serious it was.",issues:["base-form after did"],rule:"Did already carries the past tense, so the lexical verb is the base form."}
 ]},
{
 id:6,title:"C1+ Synthesis Lab",subtitle:"Choose the structure, control the register, and produce your own sentence.",skill:"SYNTHESIS",
 pass:0.8,
 items:[
  {type:"synthesis",prompt:"Rewrite in a more formal and emphatic style. Begin with NOT UNTIL.",source:"We understood the scale of the problem only after the audit had been completed.",answer:"Not until the audit had been completed did we understand the scale of the problem.",rule:"Not until + fronted time clause + did + subject + base verb."},
  {type:"synthesis",prompt:"Rewrite with negative-fronting for emphasis. Begin with UNDER NO CIRCUMSTANCES.",source:"You must not share these credentials with anyone.",answer:"Under no circumstances must you share these credentials with anyone.",rule:"Fronted negative/restrictive phrase + modal + subject + base verb."},
  {type:"synthesis",prompt:"Produce one sophisticated sentence beginning with LITTLE DID. Continue naturally and grammatically.",answer:"Little did I know",rule:"The required fixed opening is 'Little did + subject + base verb'. A meaningful continuation must follow."},
  {type:"synthesis",prompt:"Produce a formal sentence beginning with SELDOM and using the present perfect.",answer:"Seldom have I",rule:"Seldom + have/has + subject + past participle."},
  {type:"synthesis",prompt:"Produce a sentence beginning with ONLY AFTER and referring to a past event. Use did correctly.",answer:"Only after",rule:"Only after + phrase/clause + did + subject + base verb."},
  {type:"synthesis",prompt:"Write a sentence beginning with SO + adjective and use inversion with BE. Make the sentence genuinely meaningful.",answer:"So ",rule:"So + adjective + be + subject + that-clause is a formal emphatic pattern, e.g. 'So intense was the debate that…'."}
 ]}
];

const EXIT = [
 {type:"mc",prompt:"Choose the correct formal version.",options:["Seldom we encounter such resistance.","Seldom do we encounter such resistance.","Seldom are we encounter such resistance.","Seldom did we encountered such resistance."],answer:1,rule:"Seldom + do + subject + base verb."},
 {type:"text",prompt:"Complete: 'Only after the results were published ______ the researchers acknowledge the limitation.'",answer:"did",rule:"Only after… at the front requires did + subject + base verb."},
 {type:"order",prompt:"Rebuild the sentence.",words:["At","no","time","did","the","company","accept","liability"],answer:"At no time did the company accept liability.",rule:"At no time + did + subject + base verb."},
 {type:"transform",prompt:"Rewrite using NEVER. Keep the meaning.",given:"never",source:"I had witnessed such a tense exchange before.",answer:"Never had I witnessed such a tense exchange before.",rule:"Past perfect inversion uses had + subject + past participle."},
 {type:"diagnose",prompt:"Correct the sentence and identify the key error: 'Not until the evidence emerged did the police realised the extent of the fraud.'",answer:"Not until the evidence emerged did the police realise the extent of the fraud.",issues:["base-form after did"],rule:"Did carries past tense; realise must be the base form."},
 {type:"synthesis",prompt:"Write a formal sentence beginning with 'Under no circumstances' and use a modal.",answer:"Under no circumstances",rule:"Under no circumstances + modal + subject + base verb."},
 {type:"mc",prompt:"Which sentence is correct?",options:["Little did he knew what was coming.","Little he did know what was coming.","Little did he know what was coming.","Little knew did he what was coming."],answer:2,rule:"Little did + subject + base verb."},
 {type:"text",prompt:"Complete: 'So unexpected ______ the announcement that several delegates left immediately.'",answer:"was",rule:"So + adjective + be + subject + that-clause: So unexpected was the announcement…"},
 {type:"transform",prompt:"Rewrite using DID. Do not change the given word.",given:"did",source:"I realised the scale of the error only when I checked the figures twice.",answer:"Only when I checked the figures twice did I realise the scale of the error.",rule:"Only when + clause + did + subject + base verb."},
 {type:"order",prompt:"Rebuild the sentence.",words:["Never","before","have","we","encountered","such","a","complex","case"],answer:"Never before have we encountered such a complex case.",rule:"Never before + have + subject + past participle."},
 {type:"diagnose",prompt:"Correct: 'Rarely has the committee rejected a proposal so abruptly.' Is this sentence actually wrong? Explain.",answer:"Rarely has the committee rejected a proposal so abruptly.",issues:[],alreadyCorrect:true,accept:["It is correct.","The sentence is correct.","No error."],rule:"It is correct: present perfect inversion is has + subject + past participle."},
 {type:"mc",prompt:"Which opening does NOT normally trigger inversion merely because it is placed first?",options:["Under no circumstances","Only then","In no way","Last Tuesday"],answer:3,rule:"A neutral time adverbial such as 'last Tuesday' does not itself trigger this inversion."},
 {type:"text",prompt:"Complete: 'Not only ______ the proposal expensive, but it was also impractical.'",answer:"was",rule:"Not only + be + subject…; the auxiliary precedes the subject."},
 {type:"transform",prompt:"Rewrite using GREAT. Preserve the meaning.",given:"great",source:"The relief was so great that she could hardly speak.",answer:"So great was the relief that she could hardly speak.",rule:"So + adjective + be + subject + that-clause."},
 {type:"synthesis",prompt:"Write a sentence beginning with 'At no point' and use the present perfect.",answer:"At no point",rule:"At no point + have/has + subject + past participle."},
 {type:"mc",prompt:"Which is correct?",options:["Not until midnight the train arrived.","Not until midnight did the train arrive.","Not until midnight did the train arrived.","Not until midnight had the train arrive."],answer:1,rule:"Not until + time + did + subject + base verb."},
 {type:"text",prompt:"Complete: 'Seldom ______ I been so impressed by a presentation.'",answer:"have",rule:"Present perfect: seldom + have + subject + been."},
 {type:"order",prompt:"Rebuild the sentence.",words:["Only","then","did","I","realise","how","serious","the","situation","was"],answer:"Only then did I realise how serious the situation was.",rule:"Only then + did + subject + base verb."},
 {type:"diagnose",prompt:"Correct: 'Under no circumstances should you to reveal the password.'",answer:"Under no circumstances should you reveal the password.",issues:["base-form after modal"],rule:"After a modal such as should, use the base verb without 'to'."},
 {type:"synthesis",prompt:"Write a sophisticated sentence beginning with 'So controversial' and use inversion with BE plus a that-clause.",answer:"So controversial",rule:"So + adjective + be + subject + that-clause."}
];

let state = JSON.parse(localStorage.getItem("inversionMastery") || "null") || {
  unlocked:1, completed:{}, answers:{}, exit:null, name:""
};

function save(){localStorage.setItem("inversionMastery",JSON.stringify(state));}
function norm(s){
 return String(s||"").toLowerCase().replace(/[’']/g,"'").replace(/[“”]/g,'"')
   .replace(/[.,!?;:]/g,"").replace(/\s+/g," ").trim();
}
function tokens(s){return norm(s).split(" ").filter(Boolean)}
function levelfinished(id){return !!state.completed[id]}
function totalLevels(){return LEVELS.length}
function completedCount(){return Object.keys(state.completed).filter(k=>LEVELS.some(l=>String(l.id)===String(k))).length}
function overallProgress(){return Math.round((completedCount()/totalLevels())*100)}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}

function renderNav(){
 const nav=document.getElementById("levelNav"); nav.innerHTML="";
 LEVELS.forEach(l=>{
   const unlocked=l.id<=state.unlocked, done=levelfinished(l.id);
   const b=document.createElement("button"); b.className="level-btn "+(done?"done ":"")+(unlocked?"":"locked");
   b.innerHTML=`<span class="level-dot"></span><span>Level ${l.id}: ${l.title}</span>`;
   if(unlocked)b.onclick=()=>renderLevel(l.id);
   nav.appendChild(b);
 });
 const e=document.createElement("button");e.className="level-btn "+(state.exit?"done":"")+(state.unlocked>=7?"":"locked");
 e.innerHTML='<span class="level-dot"></span><span>EXIT TICKET</span>';
 if(state.unlocked>=7)e.onclick=()=>renderExit();
 nav.appendChild(e);
 document.getElementById("progressNumber").textContent=overallProgress()+"%";
 document.getElementById("progressFill").style.width=overallProgress()+"%";
 document.getElementById("progressText").textContent=state.exit? "Course complete": `${completedCount()} of ${totalLevels()} levels completed`;
}
function setActive(id){
 document.querySelectorAll(".level-btn").forEach((b,i)=>b.classList.toggle("active", i===id-1));
}

function startLevel(id){document.getElementById("welcome").classList.add("hidden");renderLevel(id)}
document.getElementById("startBtn").onclick=()=>startLevel(1);

function renderLevel(id){
 document.getElementById("welcome").classList.add("hidden");
 const l=LEVELS.find(x=>x.id===id); setActive(id);
 const view=document.getElementById("levelView");view.classList.remove("hidden");
 let html=`<div class="level-head"><div><div class="small-label">LEVEL ${l.id}</div><h2>${l.title}</h2><p>${l.subtitle}</p></div><span class="skill-tag">${l.skill}</span></div>`;
 l.items.forEach((q,i)=>html+=questionHTML(q,i,"L"+id));
 html+=`<div class="level-footer"><div id="score-${id}"></div><button class="primary hidden" id="next-${id}">${id===6?"Unlock Exit Ticket":"Continue to next level"} →</button></div>`;
 view.innerHTML=html;
 l.items.forEach((q,i)=>bindQuestion(q,i,"L"+id));
 updateLevelScore(id);
}

function questionHTML(q,i,key){
 const saved=state.answers[key+"-"+i];
 let body="";
 if(q.type==="mc"){
   body=`<div class="options">${q.options.map((o,j)=>`<button class="option" data-opt="${j}">${escapeHtml(o)}</button>`).join("")}</div>`;
 } else if(q.type==="order"){
   // Deliberately scramble the word bank. Showing the words in sentence order
   // turns a sequencing task into a memoryless copying exercise.
   const shuffled=q.words.map((w,j)=>({w,j})).sort(()=>Math.random()-0.5);
   body=`<div class="wordbank">${shuffled.map(x=>`<button class="word" data-word="${x.j}">${escapeHtml(x.w)}</button>`).join("")}</div>
   <div class="order-controls"><input class="text-input order-input" placeholder="Click the words in order, or type the complete sentence." autocomplete="off"><button type="button" class="secondary clear-order">Clear</button></div>`;
 } else if(q.type==="text"){
   body=`<div class="context">${escapeHtml(q.sentence||"")}</div><input class="text-input" placeholder="Type the missing word(s)…" autocomplete="off">`;
 } else {
   body=`<div class="context">${escapeHtml(q.source||"")}</div><textarea class="textarea" placeholder="Write your answer here…"></textarea>`;
 }
 return `<article class="question-card" data-key="${key}-${i}">
   <div class="q-meta"><span>Task ${i+1}</span><span>${labelFor(q.type)}</span></div>
   <div class="prompt">${escapeHtml(q.prompt)}</div>
   ${body}
   <div class="submit-row"><button class="secondary check-btn">Check answer</button></div>
   <div class="feedback hidden"></div>
 </article>`;
}
function labelFor(t){return ({mc:"Choose",order:"Build",text:"Type",transform:"Transform",diagnose:"Diagnose",synthesis:"Produce"})[t]||"Task"}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function bindQuestion(q,i,key){
 const card=document.querySelector(`[data-key="${key}-${i}"]`);
 if(q.type==="mc") card.querySelectorAll(".option").forEach(b=>b.onclick=()=>{
   card.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");
 });
 if(q.type==="order"){
   const input=card.querySelector(".order-input");
   card.querySelectorAll(".word").forEach(b=>b.onclick=()=>{
     if(b.classList.contains("used"))return;
     input.value+=(input.value?" ":"")+q.words[+b.dataset.word];b.classList.add("used");
   });
   card.querySelector(".clear-order").onclick=()=>{
     input.value="";
     card.querySelectorAll(".word").forEach(b=>b.classList.remove("used"));
   };
 }
 card.querySelector(".check-btn").onclick=()=>check(q,i,key,card);
}
function getResponse(q,card){
 if(q.type==="mc"){const b=card.querySelector(".option.selected");return b?+b.dataset.opt:""}
 return card.querySelector("input,textarea")?.value||"";
}
function check(q,i,key,card){
 const response=getResponse(q,card);
 if(!String(response).trim()){showToast("Write or select an answer first.");return}
 const result=evaluate(q,response);
 state.answers[key+"-"+i]={response,correct:result.correct,at:new Date().toISOString()};
 save(); renderFeedback(card,result,q,response); updateLevelScore(key.startsWith("L")?+key.slice(1):0);
}
function evaluate(q,response){
 if(q.type==="mc") return {correct:response===q.answer,why:response===q.answer?[]:["wrong choice"],explanation:q.rule,model:q.options[q.answer]};
 if(q.type==="text"){
   const a=norm(response), expected=norm(q.answer);
   const correct=a===expected;
   return {correct,why:correct?[]:diagnoseTyped(a,expected,q.rule),explanation:q.rule,model:q.full||q.answer};
 }
 if(q.type==="order"){
   const expected=norm(q.answer), a=norm(response);
   const correct=a===expected || equivalentWordOrder(a,expected);
   return {correct,why:correct?[]:diagnoseSentence(a,expected,[],q.rule),explanation:q.rule,model:q.answer};
 }
 if(q.type==="transform"){
   const a=norm(response);
   const accepted=[q.answer,...(q.accept||[])].map(norm);
   const correct=accepted.some(x=>a===x) || flexibleSentenceMatch(a,q);
   return {correct,why:correct?[]:diagnoseSentence(a,accepted[0],[],q.rule),explanation:q.rule,model:accepted[0]};
 }
 if(q.type==="diagnose"){
   const a=norm(response);
   const accepted=[q.answer,...(q.accept||[])].map(norm);
   const correct=accepted.some(x=>a.includes(x)) || diagnoseRepairEquivalent(a,q) || (q.alreadyCorrect && diagnoseAlreadyCorrect(a));
   return {correct,why:correct?[]:diagnoseSentence(a,accepted[0],q.issues||[],q.rule),explanation:q.rule,model:accepted[0]};
 }
 if(q.type==="synthesis"){
   const a=norm(response), start=norm(q.answer);
   const ok=synthesisIsAcceptable(a,q);
   return {correct:ok,why:ok?[]:diagnoseSynthesis(a,q),explanation:q.rule,model:syntheticModel(q)};
 }
}
function equivalentWordOrder(a,e){
 return a===e || tokens(a).join(" ")===tokens(e).join(" ");
}
function flexibleSentenceMatch(a,q){
  // Sentence transformations should allow harmless variation (articles, optional
  // adverbs, punctuation and other wording that leaves the target structure intact),
  // rather than demanding one memorised string.
  if(!a) return false;
  const given=norm(q.given||"");
  if(given && !a.includes(given)) return false;
  if(/^never\s+(have|has|had|did|do|does)\b/.test(a)) return true;
  if(/^under no circumstances\s+(is|are|was|were|did|do|does|should|must|can|could|may|might|would|will|shall)\b/.test(a)) return true;
  if(/^not until\b/.test(a) && /\b(did|had|was|were|has|have|is|are)\b/.test(a)) return true;
  if(/^only (when|after|before|once|then|by|if)\b/.test(a) && /\b(did|do|does|had|has|have|was|were|is|are|can|could|should|would)\b/.test(a)) return true;
  if(/^at no (time|point)\b/.test(a) && /\b(did|do|does|had|has|have|was|were|is|are|should|must|can|could)\b/.test(a)) return true;
  if(/^so\s+\w+\s+(was|were|is|are)\b/.test(a)) return true;
  return false;
}
function diagnoseRepairEquivalent(a,q){
  if(!a || q.alreadyCorrect) return false;
  const e=norm(q.answer);
  // A correction may legitimately differ in harmless wording while preserving
  // the target inversion pattern and the essential lexical content.
  const eTokens=tokens(e).filter(x=>!['a','an','the','very','really','finally','just','also'].includes(x));
  const aTokens=tokens(a);
  const missing=eTokens.filter(x=>!aTokens.includes(x));
  if(missing.length>1) return false;
  if(/^never\b/.test(e)) return /^never\s+(have|has|had|do|does|did|was|were|is|are)\s+\w+\s+\w+/.test(a);
  if(/^not until\b/.test(e)) return /^not until\b.*\bdid\s+\w+\s+\w+/.test(a);
  if(/^only after\b/.test(e) || /^only when\b/.test(e) || /^only then\b/.test(e)) return /^only\b.*\b(did|do|does|had|has|have|was|were|is|are)\s+\w+\s+\w+/.test(a);
  if(/^rarely\b/.test(e) || /^seldom\b/.test(e)) return /^(rarely|seldom)\s+(do|does|did|have|has|had|is|are|was|were)\s+\w+\s+\w+/.test(a);
  if(/^little did\b/.test(e)) return /^little\s+did\s+\w+\s+\w+/.test(a);
  if(/^at no (time|point)\b/.test(e)) return /^at no (time|point)\s+(did|do|does|have|has|had|was|were|is|are)\s+\w+\s+\w+/.test(a);
  if(/^under no circumstances\b/.test(e)) return /^under no circumstances\s+(must|should|can|could|may|might|would|will|shall|is|are|was|were|did)\s+\w+\s+\w+/.test(a);
  if(/^so\s+\w+\s+(was|were|is|are)\b/.test(e)) return /^so\s+\w+\s+(was|were|is|are)\s+\w+/.test(a);
  return false;
}
function diagnoseAlreadyCorrect(a){
  return /\b(correct|right|grammatically correct|no error|not wrong)\b/.test(a) &&
         !/\b(should be|needs to be|change|wrong|incorrect)\b/.test(a);
}
function diagnoseTyped(a,e,rule){
 const why=[];
 if(!a)why.push("missing answer");
 else if(a.split(" ").length>e.split(" ").length)why.push("extra words");
 else why.push("wrong auxiliary/verb form");
 return why;
}
function diagnoseSentence(a,e,declared,rule){
 const why=[...declared];
 const et=tokens(e);
 const first=et[0]||"";
 if(!a) why.push("missing answer");
 if(first && !a.startsWith(first) && !/^never\b|^seldom\b|^rarely\b|^little\b|^only\b|^not until\b|^at no\b|^under no\b|^in no\b|^so\b/.test(a)) why.push("the fronted trigger is missing or misplaced");
 if(/\bdid\s+\w+\s+\w+(?:ed|ing)\b/.test(a)) why.push("use the base form after did");
 if(/\bdoes\s+\w+\s+\w+s\b/.test(a)) why.push("use the base form after does");
 if(/\b(?:should|must|can|could|may|might|would|will|shall)\s+\w+\s+to\s+\w+\b/.test(a)) why.push("use the base form after a modal, without to");
 if(!why.length) why.push("the wording or word order does not yet produce a clear inversion structure");
 return [...new Set(why)];
}
function diagnoseSynthesis(a,q){
 const why=[];
 if(!a.startsWith(norm(q.answer)))why.push("required opening is missing");
 if(q.answer.toLowerCase().startsWith("seldom")&&!/(seldom (have|has|do|does|did)\b)/.test(a))why.push("missing auxiliary inversion");
 if(q.answer.toLowerCase().startsWith("little did")&&!/^little did \w+ \w+/.test(a))why.push("use 'little did + subject + base verb'");
 if(q.answer.toLowerCase().startsWith("only after")&&!/\bdid \w+ \w+/.test(a))why.push("missing did + subject + base verb");
 if(q.answer.toLowerCase().startsWith("so ")&&!/^so \w+ (was|were|is|are)\b/.test(a))why.push("use so + adjective + be + subject");
 if(q.answer.toLowerCase().startsWith("under no circumstances")&&!/^under no circumstances (must|should|can|could|may|might|would|will|shall)\b/.test(a))why.push("place a modal before the subject");
 if(!why.length)why.push("the structure is incomplete or the continuation is too short");
 return why;
}
function synthesisIsAcceptable(a,q){
  if(!a || a.length<8) return false;
  const start=norm(q.answer);
  if(start && !a.startsWith(start)) return false;
  if(/^little did\s+\w+\s+\w+/.test(a)) return true;
  if(/^seldom\s+(have|has|do|does|did|was|were|is|are)\s+\w+\b/.test(a)) return true;
  if(/^only (after|when|before|once|then|by|if)\b/.test(a) && /\b(did|had|has|have|was|were|is|are|could|should|would)\s+\w+\s+\w+/.test(a)) return true;
  if(/^not until\b/.test(a) && /\b(did|had|has|have|was|were|is|are)\s+\w+\s+\w+/.test(a)) return true;
  if(/^under no circumstances\s+(must|should|can|could|may|might|would|will|shall)\s+\w+\s+\w+/.test(a)) return true;
  if(/^so\s+\w+\s+(was|were|is|are)\s+\w+\b/.test(a)) return true;
  if(/^at no (time|point)\s+(did|do|does|had|has|have|was|were|is|are|should|must|can|could)\s+\w+\b/.test(a)) return true;
  return false;
}
function hasInversion(a,q){
 return ["seldom","little did","only after","so ","under no circumstances"].some(x=>a.startsWith(x)) && /\b(did|do|does|have|has|had|is|are|was|were|should|must|can|could|may|might|would|will)\b/.test(a);
}
function syntheticModel(q){
 if(norm(q.answer).startsWith("little did"))return "Little did I know that the decision would have consequences I could not yet imagine.";
 if(norm(q.answer).startsWith("seldom"))return "Seldom have I encountered a proposal that was both so ambitious and so carefully researched.";
 if(norm(q.answer).startsWith("only after"))return "Only after the final figures were checked did the auditors identify the discrepancy.";
 if(norm(q.answer).startsWith("so "))return "So intense was the debate that the chair eventually suspended the meeting.";
 return q.answer;
}
function renderFeedback(card,r,q,response){
 const box=card.querySelector(".feedback");box.classList.remove("hidden","good","bad");box.classList.add(r.correct?"good":"bad");
 if(r.correct){
   box.innerHTML=`<h4>✓ ${q.type==="synthesis"?"Strong production.":"Correct."}</h4><p>${escapeHtml(r.explanation)}</p>`;
 }else{
   box.innerHTML=`<h4>Not quite yet — here is the diagnosis.</h4>
   <p><strong>Likely issue:</strong> ${r.why.map(x=>`<span class="analysis-chip">${escapeHtml(x)}</span>`).join(" ")}</p>
   <div class="explanation"><strong>Why:</strong> ${escapeHtml(r.explanation)}</div>
   <p><strong>One possible answer:</strong> ${escapeHtml(r.model)}</p>`;
 }
}
function updateLevelScore(id){
 if(!id)return;
 const l=LEVELS.find(x=>x.id===id); if(!l)return;
 const arr=l.items.map((_,i)=>state.answers["L"+id+"-"+i]).filter(Boolean);
 const correct=arr.filter(x=>x.correct).length, attempted=arr.length, total=l.items.length;
 const el=document.getElementById("score-"+id), next=document.getElementById("next-"+id);
 if(!el)return;
 const pct=attempted?Math.round(correct/total*100):0;
 const passed=attempted===total && correct/total>=l.pass;
 el.innerHTML=`<div class="score-big ${passed?"pass":""}">${correct}/${total} correct <span class="muted">(${pct}%)</span></div>`;
 if(passed){
   state.completed[id]=true;
   if(state.unlocked<id+1)state.unlocked=id+1;
   save();renderNav();
   next.classList.remove("hidden"); next.onclick=()=>id===6?renderExit():renderLevel(id+1);
 } else {
   next.classList.add("hidden");
 }
}
function renderExit(){
 setActive(99);document.getElementById("welcome").classList.add("hidden");
 const view=document.getElementById("levelView");view.classList.remove("hidden");
 let html=`<div class="exit-hero"><div class="small-label">FINAL ASSESSMENT</div><h2>Exit Ticket: Inversion Mastery</h2><p>20 fresh tasks. You need at least 90% to earn the certificate. There are no retries that replace the original record: your first submitted response is preserved for review, while you may still practise and resubmit before finalising.</p></div>`;
 EXIT.forEach((q,i)=>html+=questionHTML(q,i,"E"));
 html+=`<div class="level-footer"><div id="exitScore"></div><button class="primary" id="finishExit">Calculate final result</button></div><div id="certificateArea"></div>`;
 view.innerHTML=html;EXIT.forEach((q,i)=>bindQuestion(q,i,"E"));
 document.getElementById("finishExit").onclick=finishExit;
 updateExitScore();
}
function updateExitScore(){
 const arr=EXIT.map((_,i)=>state.answers["E-"+i]).filter(Boolean), c=arr.filter(x=>x.correct).length;
 const el=document.getElementById("exitScore");if(el)el.innerHTML=`<div class="score-big">${c}/${EXIT.length} correct</div>`;
}
function finishExit(){
 const arr=EXIT.map((_,i)=>state.answers["E-"+i]).filter(Boolean);
 if(arr.length<EXIT.length){showToast(`Complete all ${EXIT.length} tasks before finalising.`);return}
 const c=arr.filter(x=>x.correct).length,pct=Math.round(c/EXIT.length*100);
 state.exit={score:c,total:EXIT.length,pct,at:new Date().toISOString()};
 save();updateExitScore();renderNav();
 const area=document.getElementById("certificateArea");
 if(pct>=90) area.innerHTML=certificateHTML(pct);
 else area.innerHTML=`<div class="panel" style="padding:22px;margin-top:20px"><h3>Not yet at certificate level</h3><p>You scored <strong>${pct}%</strong>. The certificate threshold is 90%. Review the feedback above, then practise the levels again and retake the exit ticket when ready.</p><div class="review-list">${EXIT.map((q,i)=>{const a=state.answers["E-"+i];return a&&!a.correct?`<div class="review-item"><b>Task ${i+1}: ${q.type}</b>${escapeHtml(a.response)}<br><span class="muted">Review: ${escapeHtml(q.rule)}</span></div>`:""}).join("")}</div></div>`;
}
function certificateHTML(pct){
 const existing=state.name||"";
 return `<div class="certificate" id="cert">
   <div class="seal">INVERSION MASTERY • C1+ LANGUAGE LAB</div>
   <h2>Certificate of Mastery</h2>
   <p>This certifies that</p>
   <input id="certName" class="text-input" style="max-width:360px;text-align:center" value="${escapeHtml(existing)}" placeholder="Student name">
   <div class="name" id="certNameDisplay">${escapeHtml(existing||"Your Name")}</div>
   <p>has demonstrated mastery of advanced English inversion through recognition, controlled production, transformation, error analysis and C1+ synthesis.</p>
   <p><strong>Exit ticket: ${pct}%</strong></p>
   <div class="seal">DATE: ${new Date().toLocaleDateString()}</div>
   <br><button class="primary" onclick="downloadCertificate()">Print / save certificate</button>
 </div>`;
}
function downloadCertificate(){
 const n=document.getElementById("certName")?.value.trim()||"Your Name";state.name=n;save();
 const pct=state.exit?.pct||0;
 const w=window.open("","_blank");
 w.document.write(`<!doctype html><html><head><title>Inversion Mastery Certificate</title><style>body{font-family:Georgia,serif;text-align:center;padding:60px;color:#17202a}.box{border:10px double #8f9aa4;padding:60px}.small{font:12px Arial;letter-spacing:.2em;color:#66727c}.name{font-size:38px;margin:30px}.score{font:20px Arial}</style></head><body><div class="box"><div class="small">INVERSION MASTERY • C1+ LANGUAGE LAB</div><h1>Certificate of Mastery</h1><p>This certifies that</p><div class="name">${escapeHtml(n)}</div><p>has demonstrated mastery of advanced English inversion through recognition, controlled production, transformation, error analysis and C1+ synthesis.</p><p class="score"><b>Exit ticket: ${pct}%</b></p><p class="small">${new Date().toLocaleDateString()}</p></div><script>window.print()<\/script></body></html>`);
 w.document.close();
}
function renderHome(){
 document.getElementById("welcome").classList.remove("hidden");document.getElementById("levelView").classList.add("hidden");setActive(0);
}
document.getElementById("resetBtn").onclick=()=>{
 if(confirm("Reset all progress and answers?")){localStorage.removeItem("inversionMastery");location.reload();}
};
renderNav();
if(state.unlocked>1)document.getElementById("startBtn").textContent="Continue with Level "+state.unlocked;
