  sIFR.prefetch({
    src: 'thebettertaste.swf', 
    highsrc: 'thebettertaste.swf'
  });

  sIFR.compatMode = true;
  sIFR.activate();
  
  sIFR.replace({
    selector: '.title', 
    src: 'thebettertaste.swf', 
    highsrc: 'thebettertaste.swf',
	wmode: 'transparent',
    css: {
      '.sIFR-root' : { 'color': '#6F0000' },
      'a': { 'text-decoration': 'none' },
      'a:link': { 'color': '#6F0000' },
      'a:hover': { 'color': '#000000', 'text-decoration': 'underline' }
    }

  });