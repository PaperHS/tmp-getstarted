import { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress } from '@mui/material';
import Lottie from 'react-lottie-player';
import lottieJson from './success.json';

// eslint-disable-next-line require-await
export async function asyncMobileCall(...args) {
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
  const [nftView, setNftView] = useState(null);
  useEffect(() => {
    const loadNFT = async () => {
      const nft = await asyncMobileCall('arcFetchDIDSpacesPassports');
      setNftView(btoa(nft.data));
    };
    loadNFT();
  }, [nftView]);
  return (
    <Container maxWidth="sm">
      {!nftView && (
        <Grid container justifyContent="center" alignItems="center" height="100vh" direction="column">
          <Grid item>
            <CircularProgress />
          </Grid>
          <div style={{ marginTop: 20 }}>正在领取您的专属云空间</div>
        </Grid>
      )}
      {nftView && (
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
                <img style={{ width: 204, height: 228 }} alt="nft" src={`data:image/svg+xml;base64,${nftView}`} />
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
                {nftView}
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
              }}
              onClick={() => {
                asyncMobileCall('arcViewDIDSpacesPassports');
                asyncMobileCall('arcClosePage');
              }}>
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  wordWrap: 'break-word',
                }}>
                View Details
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
export default SuccessPage;
