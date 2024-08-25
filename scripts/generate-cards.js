const krafton = [
  {
    title: "Title Sponsor",
    sponsorImageSrc: "../sponsor-images/krafton.png",
    name: "Krafton",
    link: "https://krafton.com/en/"
  },
  {
    title: "Pixelverse Sponsor",
    sponsorImageSrc: "../sponsor-images/krafton.png",
    name: "Krafton",
    link: "https://krafton.com/en/"
  }
];

const autodesk = [{
      title: "Associate Sponsor",
      sponsorImageSrc: "../sponsor-images/autodesk.png",
      name: "Autodesk",
      link: "https://www.autodesk.com/"
  },
  {
      title: "Fusion ID Sponsor",
      sponsorImageSrc: "../sponsor-images/autodesk.png",
      name: "Autodesk",
      link: "https://www.autodesk.com/"
  }
];


const tietoevry = {
  title: "Chief Sponsor",
  sponsorImageSrc: "../sponsor-images/TE.png",
  name: "Tietoevry",
  link: "https://www.tietoevry.com/en/"
};

const wpm = {
  title: "Struktura Sponsor",
  sponsorImageSrc: "../sponsor-images/wpm.png",
  name: "Walter P Moore",
  link: "https://www.walterpmoore.com/"
};

const bhide = [{
      title: "Associate Sponsor",
      sponsorImageSrc: "../sponsor-images/bhide.png",
      name: "Bhide & Bhadane Realties",
      link: "#"
  },
  {
      title: "Robotica Sponsor",
      sponsorImageSrc: "../sponsor-images/bhide.png",
      name: "Bhide & Bhadane Realties",
      link: "#"
  }
];

function createSponsorCard(sponsor) {
  document.write(`
     <div class="card">
        
        <div class = "circles">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-3"></div>
        </div> 

        <div class="card-inner"> 
          <div class="card-front">       
              <a href = "${sponsor.link}">
                <img src="${sponsor.sponsorImageSrc}" alt = "${sponsor.name} Sponsor">  
              </a>
          </div>
          <h2 class = "sponsor-title">${sponsor.title}</h2>
          <div class="card-back">
            
            <div class = 'card-info'> 
              <h3 class = "sponsor-name">${sponsor.name}</h3>
            </div> 
          </div>
        </div> 
      </div>
     `);
}