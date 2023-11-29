export interface Mappable {
  location : {
    latitude : number,
    longitude : number
  },
  markerInfo() : string
}