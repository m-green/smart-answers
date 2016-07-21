//= require govuk/multivariate-test

$(function(){
  if(isExpectedPath("overseas-passports")) {
    new GOVUK.MultivariateTest({
      el: '.get-started a',
      name: 'startButton_osPassport_201607',
      customDimensionIndex: [13, 14],
      cookieDuration: 2, // set cookie expiry to 2 days
      contentExperimentId: 'cZbCgQy3SOCHEX2l6bU-eQ',
      cohorts: {
        original: { callback: function() {}, variantId: 0},
        next: { html: 'Next', variantId: 1 },
        continue: { html: 'Continue', variantId: 2 }
      }
    });
  }

  if(isExpectedPath("calculate-your-child-maintenance")) {
    new GOVUK.MultivariateTest({
      el: '.get-started a',
      name: 'startButton_calcChildM_201607',
      customDimensionIndex: [13, 14],
      cookieDuration: 2, // set cookie expiry to 2 days
      contentExperimentId: '02HyTKtNR-yHsYlI6JoJqg',
      cohorts: {
        original: { callback: function() {}, variantId: 0},
        next: { html: 'Next', variantId: 1 },
        continue: { html: 'Continue', variantId: 2 }
      }
    });
  }

  if(isExpectedPath("marriage-abroad")) {
    new GOVUK.MultivariateTest({
      el: '.get-started a',
      name: 'startButton_marriageAbroad_201607',
      customDimensionIndex: [13, 14],
      cookieDuration: 2, // set cookie expiry to 2 days
      contentExperimentId: 'ABoraDMOQCC9WjJWsTpIPg',
      cohorts: {
        original: { callback: function() {}, variantId: 0},
        next: { html: 'Next', variantId: 1 },
        continue: { html: 'Continue', variantId: 2 }
      }
    });
  }
});
