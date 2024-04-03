import Icon from '@mui/material/Icon';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
import { indigo, pink, lightBlue } from '@mui/material/colors';

// バージョンを `package.json` の "version" エントリから取得
import pjson from "../package.json";

// ドロワー内リストの幅をカスタマイズ
const DrawerList = styled('div')(() => ({
  width: 250,
}));

// ドロワーヘッダーのサイズ・色などをカスタマイズ
const DrawerHeader = styled('div')(() => ({
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
  backgroundColor: indigo[500],
  color: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
}));

// ヘッダー内に表示するアバターのカスタマイズ
const DrawerAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: pink[500],
  width: theme.spacing(6),
  height: theme.spacing(6),
}))

type Props = {
  drawerOpen: boolean;
  onToggleQR: () => void;
  onToggleDrawer: () => void;
  onSort: (filter: Filter) => void;
};

export const SideBar = (props: Props) => {
  return (
    <Drawer
      variant="temporary"
      open={props.drawerOpen}
      onClose={props.onToggleDrawer}
    >
      <DrawerList role="presentation" onClick={props.onToggleDrawer}>
        {/* ヘッダーとアバター */}
        <DrawerHeader>
          <DrawerAvatar>
            <Icon>create</Icon>
          </DrawerAvatar>
          {/* バージョン表示 */}
          <p>TODO v{pjson.version}</p>
        </DrawerHeader>
        {/* リスト （元の <select>~</select>） */}
        <List>
          {/* all */}
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-all"
              onClick={() => props.onSort('all')}
            >
              <ListItemIcon>
                <Icon>subject</Icon>
              </ListItemIcon>
              <ListItemText secondary="すべてのタスク" />
            </ListItemButton>
          </ListItem>
          {/* unchecked */}
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-unchecked"
              onClick={() => props.onSort('unchecked')}
            >
              <ListItemIcon>
                <Icon sx={{ color: lightBlue[500] }}>radio_button_unchecked</Icon>
              </ListItemIcon>
              <ListItemText secondary="現在のタスク" />
            </ListItemButton>
          </ListItem>
          {/* checked */}
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-checked"
              onClick={() => props.onSort('checked')}
            >
              <ListItemIcon>
                <Icon sx={{ color: pink.A200 }}>check_circle_outline</Icon>
              </ListItemIcon>
              <ListItemText secondary="完了したタスク" />
            </ListItemButton>
          </ListItem>
          {/* removed */}
          <ListItem disablePadding>
            <ListItemButton
              aria-label="list-removed"
              onClick={() => props.onSort('removed')}
            >
              <ListItemIcon>
                <Icon>delete</Icon>
              </ListItemIcon>
              <ListItemText secondary="ごみ箱" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        {/* 共有アプリ */}
        <ListItem disablePadding>
          <ListItemButton
            aria-label="list-share"
            onClick={() => props.onToggleQR}
          >
            <ListItemIcon>
              <Icon>share</Icon>
            </ListItemIcon>
            <ListItemText secondary="このアプリを共有" />
          </ListItemButton>
        </ListItem>
      </DrawerList>
    </Drawer>
  );
};
