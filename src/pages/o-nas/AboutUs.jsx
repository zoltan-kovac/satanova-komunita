import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const AboutUs = () => {
  const data = [
    'Demokraciu',
    'Pokrok',
    'Obranu seba aj druhých',
    'Miešanie rás',
    'Rovnosť náboženstiev',
    'Rovnosť pohlaví',
    'Ochranu prírody',
    'Ochranu detí pred náboženskou demagógiou a fundamentalizmom',
    'Nepodporujeme',
    'Autoritárstvo',
    'Bazírovanie na tradíciách',
    'Používanie násilia v inom prípade než v obrane',
    'Rasovú neznášanlivosť',
    'Nadradenosť jednotlivých náboženstiev',
    'Nadradenosť jedného pohlavia',
    'Popieranie zmeny klímy',
    'Zneužívanie detí náboženstvami a náboženskými predstaviteľmi'
  ]

  return (
    <div>
      <Typography variant="h1" gutterBottom>O nás</Typography>
      <div>
        <Box mb={8}>
          <Typography variant="body1">
            Satanizmus nie je len liberálne náboženstvo, ale tiež filozofia podporujúca mier, všestrannú rovnoprávnosť a princípy demokracie. Neuctievame síce Satana ani iných teistických bohov, ale uctievame prírodu, človeka a ľudstvo. Sme teda v pravom zmysle slova panteisti, hoci združujeme aj rozmanité formy ateizmu.
          </Typography>
          <Typography variant="body1">
            Satanova ústava je základný dokument našej organizácie. V plnom znení a s vysvetlivkami ju nájdete tu.
          </Typography>
        </Box>
        <Box mb={8}>
          <Grid container spacing={8}>
            {data.map((item) =>
              <Grid item xs={4}>
                <Typography variant="h6">
                  {`• ${item}`}
                </Typography>
              </Grid>)}
          </Grid>
        </Box>
        <Box>
          <Typography variant="body1">
            Sabat
            Sabat je každoročným snemom satanistov, teda členov Satanovej komunity. Na Sabate sú volení správci/správkyne a prejednávajú sa podstatné otázky budúceho smerovania komunity, vrátane projektov na daný rok.

            Výsledky Sabatu 2019 si môžeš prehliadnuť tu. Medzi najdôležitejšie projekty na tento rok patrí napríklad:


            POŽIADAVKY (proti čomu bojujeme)
            1. „Požadujeme, aby náboženské organizácie smeli dávať a uchovávať členstvo iba osobám starším 15 rokov (vrátane), a to iba v prípade, že o členstvo sami zažiadajú.“
            2. Požadujeme, aby bolo prelomené spovedné tajomstvo minimálne v oblasti sexuálnych zločinov a aby kňazi povinne nahlasovali trestné činy, ktoré sa dozvedia behom spovede svojich kolegov - kňazov, a to nielen svojim nadriadeným v cirkvi, ale aj polícii a štátnym úradom. 
            3. „Požadujeme, aby bola v Slovenskej republike zakázaná detská obriezka chlapcov aj dievčat z iných než lekárskych dôvodov, a to až do dosiahnutia plnoletosti.“


            NÁVRHY (za čo bojujeme)
            4. „Navrhujeme, aby Satanova komunita začala oficiálne bojovať za právo dospelého jednotlivca na zvolenie okamihu vlastnej smrti skrz eutanáziu.„
            5. „Navrhujeme, aby Satanova komunita oficiálne podporovala dekriminalizáciu a legalizáciu prostitúcie a iných obchodných služieb, spojených so sexom či ľudskou sexualitou.“
            6. „Navrhujeme, aby Satanova komunita začala projekt o slovenských kacírskych hrdinoch (častokrát obetiach čarodejníckych procesov a katolíckych popráv) s cieľom pripomenúť tieto historické osobnosti a informovať o nich viac verejnosť.“
          </Typography>
        </Box>
      </div>
    </div>
  )
}

export default AboutUs