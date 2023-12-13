const scriptURL = 'https://script.google.com/macros/s/AKfycbyvRPqLsUnz_8tiCbuQ7HGmVy5vFXz-stHHIkjKXS3_t22LaZOcV3-la01J09AXMMWKOQ/exec';
      const form = document.forms['submit-to-google-sheet'];

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => console.log('Success!', response))
          .catch((error) => console.error('Error!', error.message));
        form.reset();
      });

const student = () => {
return{
          siswas:[
            'ABDIL HISAN NURALIM',
'AZHAR MUSHTHAFA',
'BUDI SETIAWAN',
'DELVIA FEBRIYANTI',
'EKA RAMDANI',
'ERYSCA ZAHRA S',
'FARAH PUTRI H',
'FAZIL EMERALDY',
'FAZRIL ILHAM',
'FIRDA HYRA F',
'JAKA ANGGARA',
'LUCKY PUTRA P',
'M IKHLAS ZAELANI',
'MOCHAMAD RIZKI M',
'NAFFA ALIFIAH',
'NESTA NABIL MILANO',
'NURADHA DIANTI',
'RADHITIA RAMLI S',
'RAIHANS K',
'REVAND NUR ISYAM',
'SASTIYA JENY RAHAYU',
'SITI NUR AINI',
'SYAHRUL RAMADANI',
'TAUFIK',
'WINDY GANIA',
          ]
        };
      };

const SoalPG = () => {
return{
     nomors: [
        {NoUrt:'1'}, 
        {NoUrt:'2'}, 
        {NoUrt:'3'},
        {NoUrt:'4'},
        {NoUrt:'5'}, 
        {NoUrt:'6'}, 
        {NoUrt:'7'},
        {NoUrt:'8'},
        {NoUrt:'9'}, 
        {NoUrt:'10'},
        {NoUrt:'11'}, 
        {NoUrt:'12'}, 
        {NoUrt:'13'},
        {NoUrt:'14'},
        {NoUrt:'15'}, 
        {NoUrt:'16'}, 
        {NoUrt:'17'},
        {NoUrt:'18'},
        {NoUrt:'19'}, 
        {NoUrt:'20'},
        {NoUrt:'21'}, 
        {NoUrt:'22'}, 
        {NoUrt:'23'},
        {NoUrt:'24'},
        {NoUrt:'25'}, 
        {NoUrt:'26'}, 
        {NoUrt:'27'},
        {NoUrt:'28'},
        {NoUrt:'29'}, 
        {NoUrt:'30'},
        {NoUrt:'31'}, 
        {NoUrt:'32'}, 
        {NoUrt:'33'},
        {NoUrt:'34'},
        {NoUrt:'35'}, 
        {NoUrt:'36'}, 
        {NoUrt:'37'},
        {NoUrt:'38'},
        {NoUrt:'39'}, 
        {NoUrt:'40'},
        {NoUrt:'41'}, 
        {NoUrt:'42'}, 
        {NoUrt:'43'},
        {NoUrt:'44'},
        {NoUrt:'45'}, 
        // {NoUrt:'46'}, 
        // {NoUrt:'47'},
        // {NoUrt:'48'},
        // {NoUrt:'49'}, 
        // {NoUrt:'50'},
    ]
};

};

