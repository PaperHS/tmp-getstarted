import { Container, Grid } from '@mui/material';
import Lottie from 'react-lottie-player';
import lottieJson from './success.json';

// eslint-disable-next-line require-await
async function asyncMobileCall(...args) {
  return new Promise((resolve, reject) => {
    import('dsbridge')
      .then((dsbridge) => {
        if (!dsbridge.call) {
          // eslint-disable-next-line no-param-reassign
          dsbridge = dsbridge.default;
        }
        dsbridge.call(...args, (resString) => {
          try {
            const result = JSON.parse(resString);
            if (result.code === 0) {
              const data = JSON.parse(result.data);
              resolve(data);
            } else {
              reject(new Error(result.error));
            }
          } catch {
            resolve(resString);
          }
        });
      })
      .catch((err) => {
        console.error('load dsbridge error', err);
      });
  });
}
function SuccessPage() {
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={1}>
        <Grid container spacing={1} justifyContent="center" direction="column">
          <Grid item style={{ marginTop: 100 }} justifyContent="center" alignItems="center">
            <div>
              <div style={{ zIndex: 0, position: 'absolute', left: '100px' }}>
                <Lottie loop animationData={lottieJson} play style={{ width: 200, height: 200 }} />
              </div>
              <div
                style={{
                  color: '#030712',
                  fontSize: 32,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                  zIndex: 1,
                }}>
                Success
              </div>
            </div>
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <div
              style={{
                width: '100%',
                height: '100%',

                justifyContent: 'center',
                alignItems: 'center',
                display: 'inline-flex',
              }}>
              <img
                style={{ width: 204, height: 228 }}
                alt="nft"
                src="https://bbqa4wgh26xvwv57sp6bxxxjcolvxyijsayluplwmoi.did.abtnet.io/image-bin/uploads/de72adcfc319deb11e0105978bc55ec7.png"
              />
            </div>
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '400',
                wordWrap: 'break-word',
              }}>
              Your wallet access records have been backed up to DID Spaces.
            </div>
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                color: '#3B82F6',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '400',
                wordWrap: 'break-word',
              }}
              onClick={() => {
                asyncMobileCall('arcGotoDIDSpacesDetails');
                asyncMobileCall('arcClosePage');
              }}>
              ‌‌‌‌View backup data
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ marginTop: 100 }}>
          <div
            style={{
              width: '300px',
              height: '36px',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              background: '#030712',
              borderRadius: 8,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'inline-flex',
            }}>
            <div
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '500',
                wordWrap: 'break-word',
              }}
              onClick={() => {
                asyncMobileCall('arcViewDIDSpacesPassports');
                asyncMobileCall('arcClosePage');
              }}>
              View Details
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
export default SuccessPage;
