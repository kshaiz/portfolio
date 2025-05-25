import Theme from '../style/theme'
import { Typography } from '@mui/material'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: `${Theme.spacing(1)}`,
        borderRadius: Theme.shape.borderRadius,
        // background: 'rgba(230, 231, 253, 0.45)',
        background: 'rgba(0, 0, 0, 0.05)',
        margin: `${Theme.spacing(4)} 0 ${Theme.spacing(1)}`,
        textAlign: 'center',
      }}
    >
      <Typography variant="caption" color="text.disabled">
        ©{currentYear}, Shaiz Kunhimohammed
      </Typography>
    </footer>
  )
}

export default Footer
