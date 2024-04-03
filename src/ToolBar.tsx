import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

type Props = {
  filter: Filter;
};

const translator = (arg: Filter) => {
  switch (arg) {
    case 'all':
      return 'すべてのタスク';
    case 'checked':
      return '完了したタスク';
    case 'unchecked':
      return '現在のタスク';
    case 'removed':
      return 'ごみ箱';
    default:
      return 'TODO';
  }
}

export const ToolBar = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu-button"
            size="large"
            sx={{ mr: 2 }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography>{translator(props.filter)}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
