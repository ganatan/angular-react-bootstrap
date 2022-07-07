import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './00-main/main';
import Accordions from './accordions/items';
import Alerts from './alerts/items';
import Badges from './badges/items';
import Blockquotes from './blockquotes/items';
import Breadcrumb from './breadcrumb/items';
import Buttons from './buttons/items';
import Cards from './cards/items';
import Collapses from './collapses/items';
import Checkbox from './checkbox/items';
import Dropdowns from './dropdowns/items';
import Forms from './forms/items';
import ListGroup from './list-group/items';
import Modal from './modal/items';
import Pagination from './pagination/items';
import Popovers from './popovers/items';
import Progress from './progress/items';
import Spinners from './spinners/items';
import Tables from './tables/items';
import Toasts from './toasts/items';
import Tooltips from './tooltips/items';
import Typography from './typography/items';

import Notfound from '../../../modules/general/not-found/not-found';

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route index element={<Main />} />
        <Route path="*" element={<Notfound />} />
        <Route path="main/*" element={<Main />} />
        <Route path="accordions/*" element={<Accordions />} />
        <Route path="alerts/*" element={<Alerts />} />
        <Route path="badges/*" element={<Badges />} />
        <Route path="blockquotes/*" element={<Blockquotes />} />
        <Route path="breadcrumb/*" element={<Breadcrumb />} />
        <Route path="buttons/*" element={<Buttons />} />
        <Route path="cards/*" element={<Cards />} />
        <Route path="collapse/*" element={<Collapses />} />
        <Route path="checkbox/*" element={<Checkbox />} />
        <Route path="dropdowns/*" element={<Dropdowns />} />
        <Route path="forms/*" element={<Forms />} />
        <Route path="list-group/*" element={<ListGroup />} />
        <Route path="modal/*" element={<Modal />} />
        <Route path="pagination/*" element={<Pagination />} />
        <Route path="popovers/*" element={<Popovers />} />
        <Route path="progress/*" element={<Progress />} />
        <Route path="spinners/*" element={<Spinners />} />
        <Route path="tables/*" element={<Tables />} />
        <Route path="toasts/*" element={<Toasts />} />
        <Route path="tooltips/*" element={<Tooltips />} />
        <Route path="typography/*" element={<Typography />} />

      </Routes>
    )
  }

}

export default AppRouting;