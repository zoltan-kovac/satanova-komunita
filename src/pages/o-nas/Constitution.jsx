import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const Constitution = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const data = [
    'Satanizmus nie je len náboženstvo, ale aj filozofia. (Satanizmus má svoje náboženské prvky, ale tiež predstavuje životnú filozofiu)',
    'Satanova komunita SK neuctieva Satana. Predmetom a stredobodom je človek samotný, ako tvorca vymyslených bohov. (Satan v skutočnosti neexistuje, rovnako ako bohovia. Jediné, čo je skutočné, je ľudstvo a príroda)',
    'Satanova komunita SK nepropaguje ani neuctieva zlo, má iba iný pohľad na morálku než tradičné monoteistické náboženstvá. (Neveríme v tradičnú anti-sexuálnu zdržanlivú morálku poslušnosti, miesto nej máme život podporujúci a uctievajúci postoj k slobode)',
    'Člen Satanovej komunity SK môže mať akékoľvek náboženské aj ateistické názory, ktoré nezasahujú proti slobode druhých ľudí. (Podporujeme toleranciu, ale nie na úkor ľudských práv)',
    'Satanova komunita SK nemá kňazov alebo kňažky. Má iba členov a členky, ktorí demokraticky rozhodujú o témach týkajúcich sa Satanovej Komunity. Jedinou osobou, spôsobilou ku konaniu duchovných obradov, je predseda. (Nepraktikujeme mágiu ani zbožné voodoo)',
    'Zmyslom zeme je Nadčlovek. Satanova komunita SK pomáha svojim členom stať sa a rásť v Nadčloveku. Prekonanie sebe samého, svojich hraníc a budovanie Nového sveta je osobným cieľom každého člena Satanovej komunity SK. (Cesta Nadčloveka začína u nás registrovaním sa)',
    'Satanova komunita SK považuje túto planétu a prírodu, nie nebo, za miesto pravého raja. Láska k prírode, starostlivosť a zodpovednosť za životné prostredie a blaho všetkých vyšších zvierat sú pre nás samozrejmosť. (Sme panteisti s priateľským prístupom k ateizmu - príroda a evolúcia je našou posvätnou entitou)',
    'Satanova komunita SK vyznáva liberalizmus v plnej šírke a prijíma rovnoprávnosť pred zákonom a rovnaké práva všetkých ľudských bytostí bez ohľadu na rasu, orientáciu, pohlavie či identitu. (Akákoľvek diskriminácia je neprípustná)',
    'Satanova komunita SK vyznáva demokraciu a demokratické rozhodnutia členstva. Komunitu aj zhromaždenie preto vedie predseda/predsedkyňa, zvolený/á demokraticky z členov. Voľba prebieha každý rok. (Každý člen má právo hlasovať o návrhoch Satanovej komunity na každoročnom Sabate)',
    'Satanova komunita SK sa spája s politikou a vždy bude. (Najväčšie zmeny vedúce k Novému svetu môžeme dosiahnuť skrze legislatívne zmeny na národnej a medzinárodnej úrovni.)',
    'Satanova komunita SK oficiálne podporuje manifest európskych Pirátskych strán a pirátsku politickú filozofiu',
    'Satanova komunita SK podporuje myšlienku OSN a EÚ',
    'Satanova komunita SK považuje za svoj cieľ brániť ľudstvo pred demagógiou a protiprávnym jednaniam cirkví a náboženstiev po celom svete aj na území Slovenskej republiky. Usporiadava prednášky a akcie, ktoré poukazujú na nebezpečenstvo siekt a právnu pomoc pri odchode z tradičných náboženstiev. Zameriava sa na ochranu detí pred náboženským fundamentalizmom. (Ako komunita chceme pomôcť obetiam náboženstiev)',
  ]

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h2" gutterBottom>Satanova Ústava</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box mb={8}>
           <Typography variant="h4">
              Satanova ústava je základný dokument našej organizácie.
            </Typography>
            <Grid item xs={12}>
              <List dense={true}>
                {data.map((item, index) =>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>{`${index}.`}</ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>)}
              </List>
            </Grid>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Constitution