import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        To do list...
      </Typography>
      <Typography variant="subtitle1" component="div">
        the <b>list</b> that tells you what you need to do..
      </Typography>
    </div>
  )
}

export default Header

