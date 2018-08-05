import React from 'react';
import store from './../../../Reducers/ItemsReducer'
import { connect } from 'react-redux'
import { 
  Button, 
  Dialog, 
  DialogContent, 
} from '@material-ui/core';
import { ShoppingCart as ShoppinCartIcon } from '@material-ui/icons';
import CartProgress from './ShoppingCartComponents/CartProgress';

const styles = {
  icon: {
    marginLeft: 5,
  },
  itemCount: { 
    position: 'absolute', 
    fontSize: 10,
    right: 17,
    bottom: 23
  }
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const items = this.props.states.addToCartReducer.items;
    const moreStyles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={moreStyles.button}>
          Cart
          <div style={styles.itemCount}>
            { items.length }
          </div>
          <ShoppinCartIcon style={styles.icon} />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth='md'
          fullWidth
        >
          <DialogContent>
            {items.length > 0 ?
              <CartProgress itemObjects={items} closeDialog={this.handleClose} />
            : 'Shopping cart is empty. Add items by clicking on the ADD button'
            }
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { states: state };
}

export default connect(mapStateToProps)(ShoppingCart);