export default {
  ver: "$$version",
  api: "https://nutils.itsmeow.cat",
  customDelimiter: "__custom",
  packVersion: 1,
  actualGameVersion:
    document
      .querySelector<HTMLScriptElement>(`script[src*="game.js"]`)
      ?.src.split("/")
      .pop()
      ?.split("?v=")?.[1] ||
    (() => {
      try {
        return App.ClientVersion;
      } catch {
        return "unknown";
      }
    })(),
  PacketTypeMap: {
    systemMessage: "w",
    chatSend: "x",
    findMatch: "h",
    joinMatch: "j",
    data: "d",
    data2: "p",
    joinedMessage: "i",
  },
  Colors: {
    green: 8978312,
    red: 12603201,
    yellow: 16763904,
    white: 13421772,
    dotGreen: 65280,
    dotOrange: 16757012,
    dotGrey: 8947848,
  },
  MapIDs: {
    Hull: 1,
    Igloo: 2,
    Temple: 3,
    DragonsDen: 4,
    dm_Arena1: 5,
    Elysium: 6,
    Tobruk: 7,
    ColdFusion: 8,
    TwinFaces: 9,
    KodysIsland: 10,
    Canyon: 11,
    Hill364: 12,
    Stasis: 13,
    ctf_Evening: 14,
    ArcticDusk: 15,
    Cathedral: 16,
    ctf_Lambda: 17,
    Aerial: 18,
    ctf_FacingWorlds: 19,
    ctf_Ash: 20,
    ctf_Naom: 21,
    dm_Hunter: 22,
    Tribal: 23,
    Kiwi: 24,
    Webb: 26,
    dm_Sleet: 27,
    SpaceStation: 28,
    Sinkhole: 29,
    LonelyIsland: 30,
    dm_Nexus: 31,
  },
};
