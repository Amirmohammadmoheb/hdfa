"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const emojis = ["🎈","🌈","💖","🦄","🌈","🎈","🌈","💖","🦄","🎈","💖","🌈","🦄"];
  const [clientEmojis, setClientEmojis] = useState<any[]>([]);

  useEffect(() => {
    const generated = emojis.map((emoji) => {
      const size = 24 + Math.random() * 32;
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 5;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      return { emoji, size, duration, delay, startX, startY, endX, endY };
    });
    setClientEmojis(generated);
  }, []);
  const [price,setPrice] = useState("")
  useEffect(()=>{
    try{
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
    .then(response=>response.json())
    .then(data=>setPrice(data.binancecoin.usd))
    }catch{
      setPrice("cant fond")
    }
  },[])
  return (
    <>
    <div>
    <div className="relative">
      <div className="fixed top-0 z-0 h-screen w-screen overflow-hidden opacity-40">
        {clientEmojis.map((e, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              fontSize: `${e.size}px`,
              left: `${e.startX}%`,
              top: `${e.startY}%`,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
              '--start-x': `${e.startX}%`,
              '--start-y': `${e.startY}%`,
              '--end-x': `${e.endX}%`,
              '--end-y': `${e.endY}%`,
            } as React.CSSProperties}
          >
            {e.emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-screen flex-col items-center my-16">
        <h1 className="text-6xl text-center mx-5 md:text-7xl font-bold text-foreground mb-4 drop-shadow-lg font-fredoka">
          🌟 GiggleFund 🌟
        </h1>
        <p
          className="font-comicneueu mx-5 text-xl text-center md:text-2xl text-accent-foreground bg-accent/70 rounded-3xl text-white px-6 py-3 inline-block font-semibold"
          style={{ backgroundColor: "hsl(280deg 60% 75% / 70%)" }}
        >
          GiggleFund — The UNSTOPPABLE force of kindness 💛
        </p>
        <p className="font-comicneueu text-lg md:text-xl text-center mx-5 text-muted-foreground mt-2 font-medium">
          Supporting children's education through community donations to GiggleAcademy 🎓
        </p>
        <p className="font-comicneueu text-lg md:text-xl text-center mx-5 text-muted-foreground mt-4 font-medium">
          Built by the people, for the people - A true community takeover 🤝
        </p>
        <div className="mt-16 relative flex w-11/12">
          <div className="absolute hidden lg:block z-5 left-0">
            <Link href={"https://x.com/cz_binance/status/1976505324300312835"}><Image unoptimized src={"/cz-bnb-donation-6JqzikcL.png"} width={30} height={30} alt="cz-bnb-donation-6JqzikcL" className="w-72 -rotate-6 hover:rotate-0 transition-transform duration-500" style={{width:"32rem",borderRadius:"0.5rem"}}/></Link>
            <Image src="/60.png" unoptimized alt="Giggle Mascot" className="w-80 rounded-lg shadow-xl transform rotate-12 hover:rotate-0 -mt-44 ml-12 transition-transform duration-300" width={30} height={30}/>
          </div>
          <div className="flex flex-col">
            <div className="absolute rounded-lg left-1/2 flex items-center flex-col -translate-x-1/2 z-6 w-[350px] md:w-[500px]" style={{backgroundColor:"rgb(245, 248, 250)"}}>
              <h1 className="font-fredoka text-3xl text-center mt-7 font-bold text-foreground mb-2">🎉 Donation Tracker 🎉</h1>
              <p className="font-comicneueu text-muted-foreground text-center text-lg" style={{fontWeight:"200"}}>Total value donated to GiggleAcademy!</p>
              <div className="box w-[300px] md:w-[350px] mt-10 text-center rounded-3xl" style={{backgroundColor:"hsl(35 100% 70%)"}}>
                <div className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold py-5 mb-2">${(11466.6741*parseInt(price)).toLocaleString()}</div>
                <p className="font-comicneueu text-lg mt-3">11466.6741 BNB @ ${price}</p>
                <div className="text-sm font-comicneueu text-muted-foreground mt-4 mb-5" style={{color:"hsl(240 15% 45%)"}}>donated to GiggleAcademy! 🎓</div>
              </div>
              <div style={{backgroundColor:"hsl(280deg 60% 75% / 70%)"}} className="mt-10 mb-3 rounded-xl text-center"><Link href="https://giggleacademy.com/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-2 text-base font-semibold text-accent-foreground bg-accent/80 hover:bg-accent rounded-2xl px-5 py-2.5 transition-colors duration-200"><span>Every fee helps free education! 📚✨</span><svg className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></Link></div>
              <Link href="https://bscscan.com/advanced-filter?fadd=0x20d6015660b3fe52e6690a889b5C51F69902cE0e&amp;tadd=0xC7f501D25Ea088aeFCa8B4b3ebD936aAe12bF4A4&amp;txntype=1&amp;qt=1&amp;tkn=bnb,0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" target="_blank" rel="noopener noreferrer" className="mb-8 font-comicneueu inline-flex items-center space-x-2 bg-accent/80 hover:bg-accent text-accent-foreground rounded-2xl px-4 py-3 font-semibold transition-all duration-200 hover:scale-105 text-white" style={{backgroundColor:"hsl(280deg 60% 75% / 70%)"}}>🔍 Proof of transaction</Link>
            </div>
          </div>
          <div className="absolute hidden lg:block z-3 right-0">
            <Image unoptimized src="/76.png" alt="CZ Donation Tweet" className="w-80 rounded-lg shadow-xl transform rotate-6" width={30} height={30}/>
            <Image unoptimized width={30} height={30} src="/77.png" alt="CZ Giggle Academy" className="w-96 rounded-xl -mt-32 -ml-14 shadow-xl transform -rotate-12"/>
          </div>
        </div>
        <div className="mt-130 flex justify-center gap-2 flex-wrap">
          <button className="inline-flex items-center opacity-100 justify-center border-white gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform" style={{backgroundColor:"hsl(45deg 100% 55% / 90%)"}}>🪙 Buy Giggle Token</button>
          <button style={{backgroundColor:"hsl(280 60% 75%)"}} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 font-bold text-lg px-8 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform border-2">🐦 Follow Twitter</button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center absolute mt-110 lg:mt-40">
        <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">How to Buy $GIGGLE</h2>
        <div className="flex font-comicneueu justify-center lg:justify-between items-center flex-wrap gap-6">
          <div style={{backgroundColor:"hsl(0 0% 100%)"}} className="font-comicneueu rounded-lg border bg-card text-card-foreground shadow-sm w-80 lg:w-96 card-playful hover:scale-105 transition-transform"><div className="flex flex-col space-y-1.5 p-6 text-center"><div className="text-6xl mb-4">👛</div><h3 className="tracking-tight text-2xl font-bold text-primary" style={{color:"hsl(45 100% 55%)"}}>Step 1</h3><h3 className="font-semibold tracking-tight text-xl">Create Wallet</h3></div><div className="p-6 pt-0 text-center"><p className="text-muted-foreground">Download MetaMask or TrustWallet and set up your crypto wallet</p></div></div>
          <div style={{backgroundColor:"hsl(0 0% 100%)"}} className="rounded-lg border w-80 lg:w-96 bg-card text-card-foreground shadow-sm card-playful hover:scale-105 transition-transform"><div className="flex flex-col space-y-1.5 p-6 text-center"><div className="text-6xl mb-4">🔄</div><h3 className="tracking-tight text-2xl font-bold text-primary" style={{color:"hsl(45 100% 55%)"}}>Step 2</h3><h3 className="font-semibold tracking-tight text-xl">Buy BNB &amp; Swap</h3></div><div className="p-6 pt-0 text-center"><p className="text-muted-foreground">Purchase BNB, then swap it for $GIGGLE on PancakeSwap</p></div></div>
          <div style={{backgroundColor:"hsl(0 0% 100%)"}} className="rounded-lg border w-80 lg:w-96 bg-card text-card-foreground shadow-sm card-playful hover:scale-105 transition-transform"><div className="flex flex-col space-y-1.5 p-6 text-center"><div className="text-6xl mb-4">🎓</div><h3 className="tracking-tight text-2xl font-bold text-primary" style={{color:"hsl(45 100% 55%)"}}>Step 3</h3><h3 className="font-semibold tracking-tight text-xl">Hold &amp; Support Education</h3></div><div className="p-6 pt-0 text-center"><p className="text-muted-foreground">Every transaction helps fund education for children worldwide</p></div></div>
        </div>
        <button className="inline-flex mt-7 items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform" style={{backgroundColor:"hsl(45 100% 55%)"}}>🥞 Swap Now on PancakeSwap</button>
        <h2 className="font-fredoka mt-32 text-4xl md:text-5xl font-bold text-foreground mb-4">💰 Tax System &amp; Real Impact</h2>
        <p className="font-comicneueu text-xl text-muted-foreground" style={{color:"hsl(240 15% 45%)"}}>Every trade makes a difference</p>
        <div className="flex flex-wrap px-5 gap-5 justify-center w-screen">
          <div style={{backgroundColor:"hsl(0 0% 100%)"}} className="font-comicneueu w-full lg:w-1/3 rounded-lg border bg-card text-card-foreground shadow-sm card-playful"><div className="flex flex-col space-y-1.5 p-6"><h3 className="font-semibold tracking-tight text-3xl text-center flex items-center justify-center gap-2"><span>📊</span><span>5% Tax on Every Trade</span></h3></div><div className="p-6 pt-0 space-y-4"><div className="bg-primary/10 rounded-xl p-6 border-2 border-primary" style={{backgroundColor:"hsl(45deg 100% 55% / 10%)",borderColor:"hsl(45 100% 55%)"}}><p className="text-lg font-bold text-center text-primary mb-2" style={{color:"hsl(45 100% 55%)"}}>100% Goes to GiggleFund</p><p className="text-center text-muted-foreground">Direct donation to GiggleFund Smart Contract</p></div><div className="space-y-2"><div className="flex items-center gap-2"><span className="text-2xl">✅</span><p className="text-foreground font-semibold">No team allocation</p></div><div className="flex items-center gap-2"><span className="text-2xl">✅</span><p className="text-foreground font-semibold">No dev tax</p></div><div className="flex items-center gap-2"><span className="text-2xl">✅</span><p className="text-foreground font-semibold">100% for education</p></div></div></div></div>
          <div style={{backgroundColor:"hsl(0 0% 100%)"}} className="font-comicneueu w-full lg:w-1/3 rounded-lg border bg-card text-card-foreground shadow-sm card-playful"><div className="flex flex-col space-y-1.5 p-6"><h3 className="font-semibold tracking-tight text-3xl text-center flex items-center justify-center gap-2"><span>🎓</span><span>Real-Life Impact</span></h3></div><div className="p-6 pt-0 space-y-4"><div className="bg-accent/20 rounded-xl p-6 border-2 border-accent" style={{backgroundColor:"hsl(280deg 60% 75% / 20%)"}}><p className="text-lg font-bold text-center mb-4">Every Trade = Direct Donation</p><div className="bg-card rounded-lg p-4" style={{backgroundColor:"hsl(0 0% 100%)"}}><p className="text-sm text-muted-foreground mb-2">Example Impact:</p><p className="text-foreground font-semibold">💵 $1,000 trade → $50 to the fund</p><p className="text-primary font-bold mt-2" style={{color:"hsl(45 100% 55%)"}}>= Scholarships for children on GiggleAcademy</p></div></div><div className="text-center p-4 bg-primary/10 rounded-xl"><p className="text-2xl font-bold text-primary mb-2">🌟 Be Part of the Change</p><p className="text-muted-foreground">Trade, hold, and help build a brighter future for children worldwide</p></div></div></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-fredoka mt-24 text-center">🧮 Donation Impact Calculator</h2>
        <p className="text-xl font-comicneueu text-center text-muted-foreground">See what your donations can provide for children's education</p>
        <div style={{backgroundColor:"hsl(0 0% 100%)"}} className="rounded-lg border bg-card text-card-foreground shadow-sm card-playful">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold tracking-tight text-center text-2xl">
          📊 What Can We Provide?
        </h3>
      </div>

      <div className="p-6 pt-0 font-fredoka">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-2">Item</th>
                <th className="text-right py-4 px-2">Price</th>
                <th className="text-right py-4 px-2">Quantity</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🏫</span>
                      <span className="font-semibold">Elementary School</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-10">
                      Build 1 school
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 font-semibold">$70,400</td>
                <td className="text-right py-4 px-2">
                  <span className="text-2xl font-bold">160</span>
                </td>
              </tr>

              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">📚</span>
                      <span className="font-semibold">Textbook Set</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-10">
                      1 set of books for 1 student
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 font-semibold">$70</td>
                <td className="text-right py-4 px-2">
                  <span className="text-2xl font-bold">161,483</span>
                </td>
              </tr>

              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🍜</span>
                      <span className="font-semibold">Lunch Subsidy (1 year)</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-10">
                      1 lunch meal per year
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 font-semibold">$422</td>
                <td className="text-right py-4 px-2">
                  <span className="text-2xl font-bold">26,786</span>
                </td>
              </tr>

              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🏆</span>
                      <span className="font-semibold">
                        University Tuition (4 years)
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-10">
                      Full course tuition
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 font-semibold">$2,812</td>
                <td className="text-right py-4 px-2">
                  <span className="text-2xl font-bold">4,019</span>
                </td>
              </tr>

              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">⛳️</span>
                      <span className="font-semibold">Standard Playground</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-10">
                      Build playground
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 font-semibold">$21,130</td>
                <td className="text-right py-4 px-2">
                  <span className="text-2xl font-bold">534</span>
                </td>
              </tr>

              <tr className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🧣</span>
                      <span className="font-semibold">Winter Clothes</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-10">
                      1 set of winter clothes
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2 font-semibold">$43</td>
                <td className="text-right py-4 px-2">
                  <span className="text-2xl font-bold">262,880</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
        
    </div>
    
    </div>
    </>
  );
}
