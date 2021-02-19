/* PhotonSieveDevelopment.js
application to design a photon sieve for output as a .dxf file
for fabrication by chemical etching or micro-photolithography
*/

const LAMBDA = 0.0005125;  //light wavelength (mm)
const FD = 72;  //focal distance (mm)
const ZONES = 31;  //number of zones in underlying Fresnel zone plate
const DIA_MIN = 0.0254;  //fabrication constraint: minimum pinhole diameter (mm)
const SPACE_MIN = 0.0254;  //fabrication constraint: minimum spacing between features (mm)
const MAX_FACTOR = 1.53;  //zone width multiplier for largest pinhole diameter (mm)
const AREA_PROP = 0.300;  //proportion of zone area for sum of pinhole areas

// create underlying Fresnel Zone Plate array
let fresnelZonePlate = [];
for ( let i =0; i < ZONES; i++ ){
    let zone = i+1;
    let radius = Math.sqrt(FD*LAMBDA*zone);
    fresnelZonePlate.push(radius);
}

class Sieve {
    constructor (fresnelZonePlate, totalPinholes, totalArea) {
        this.totalPinholes = totalPinholes
        this.totalArea = totalArea
    }
}

class Ring {
    constructor(centerlineRadius, ringWidth, numOfPinholes, openArea){
        this.centerlineRadius = centerlineRadius
        this.ringWidth = ringWidth
        this.numOfPinholes = numOfPinholes
        this.openArea = openArea
    } 
}

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

class Pinhole {
    constructor(radius, azimuth, pinholeArea) {
       this.radius = radius
       this.azimuth = azimuth
       this.pinholeArea = pinholeArea
       this.point = function getCoords(radius, azimuth) {
           let x = radius*Math.cos(azimuth);
           let y = radius*Math.sin(azimuth);
        return new Point(x,y);
        }
}

function randMinMax(min, max) {
    return Math.random() * (max - min) + min;
 }

// conflict checking function can safely ignore pinholes placed on rings other than current 
function getConflicts(currentRing, radius, azimuth) {
         
    // loop through all pinholes on current ring, check if min spacing constraint is violated
    for(i = 0; i < currentPinholeArray.length; i ++){
        let conflictDistance = distanceBetween(currentPinholeArray[i], )



    }

 }

function distanceBetween(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
 }

 //create new pinhole sieve object
 const pinholeSieve = new Sieve(0, 0);

 //loop through fresnelZonePlate, add a Ring for each even-numbered zone
 for(i = 1; i < fresnelZonePlate.length; i = i + 2){
     let zoneWidth = fresnelZonePlate[i] - fresnelZonePlate[i-1];
     let centerlineRadius = fresnelZonePlate[i-1] + zoneWidth / 2;
     let ('Ring' + i) = new Ring(centerlineRadius, 0, 0);
     let currentRing = ('Ring' + i);
     
     //add pinholes to ring until total area constraint is fulfilled
     let addPinholes = () => {
         while(currentRing.openArea < AREA_PROP){
            let radius = randMinMax(zoneWidth * .25, zoneWidth * MAX_FACTOR);
            let azimuth = Math.random(Math.PI * 2);
            let currentPinholeArray = []; 
            let newPinhole = new Pinhole(radius, azimuth, 0);
            currentPinholeArray.push(newPinhole.point);           
         }
    }
 }
