var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
   <document>
   <showcaseTemplate mode="showcase">
   <banner>
   <title>Télévision locale Belge</title>
   </banner>
   <carousel>
   <section>
   <lockup videoURL="https://tvl-live.l3.freecaster.net/live/actv/actv.m3u8?token=09633b4c4e2769dac76ea">
   <img src="${this.BASEURL}images/actv.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://59959724487e3.streamlock.net/stream/live/playlist.m3u8">
   <img src="${this.BASEURL}images/bx1.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://594a365b4a1b2.streamlock.net/canalc/_definst_/live/playlist.m3u8">
   <img src="${this.BASEURL}images/canalc.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="http://streamer.canalc.be:1935/canalzoom/smil:SMIL-canalzoom-multi/playlist.m3u8">
   <img src="${this.BASEURL}images/canalzoom.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://594a365b4a1b2.streamlock.net/matele/live/playlist.m3u8">
   <img src="${this.BASEURL}images/matele.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://streaming01.divercom.be/notele_live/_definst_/direct.stream/playlist.m3u8">
   <img src="${this.BASEURL}images/notele.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://tvl-live.l3.freecaster.net/live/telemb/telemb.m3u8?token=0f6f436f676a7c20e33c8">
   <img src="${this.BASEURL}images/telemb.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://tvl-live.l3.freecaster.net/live/telesambre/telesambre-audio_track=128000-video=2600000.m3u8">
   <img src="${this.BASEURL}images/telesambre.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://5a0b00d270652.streamlock.net/live/tvcom-live/playlist.m3u8">
   <img src="${this.BASEURL}images/tvcom.png" width="500" height="308" />
   </lockup>
   <lockup videoURL="https://5a0b00d270652.streamlock.net/live/tvlux-live/playlist.m3u8">
   <img src="${this.BASEURL}images/tvlux.png" width="500" height="308" />
   </lockup>
   
   </section>
   </carousel>
   </showcaseTemplate>
   </document>`
}
