import React, { useState, useEffect, forwardRef } from 'react';
import { concat } from 'lodash';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { parse } from 'uri-js';

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const FlightList = ({ cheapFlights, businessFlights, loading, getCheapFlight, getBusinessFlight }) => {
    const [flights, setFlight] = useState({
        columns: [
          {
            title: 'Flight Type',
            field: 'flightType',
            lookup: { 1: 'Business', 2: 'Cheap' }
         },
          { title: 'Departure', field: 'departure' },
          { title: 'Arrival', field: 'arrival' },
          { title: 'Departure Time', field: 'departureTime', type: 'date' },
          {
            title: 'Arrival Time',
            field: 'arrivalTime',
            type: 'date',
          },
        ],
        data: []
      });

      useEffect(() => {
        if (!businessFlights.length || !cheapFlights.length) {
          getCheapFlight();
          getBusinessFlight();
        }
      }, []);

      useEffect(() => {
        if (!flights.data.length && businessFlights.length > 0 && cheapFlights.length > 0) {
          const businessData = businessFlights.map(({ departureTime, departure, arrival, arrivalTime }) => {
            return {
              flightType: 1,
              departureTime: new Date(departureTime * 1000),
              departure,
              arrival,
              arrivalTime: new Date(arrivalTime * 1000)
            };
          });

          const cheapData = cheapFlights.map(({ departure: departureTime, arrival: arrivalTime, route }) => {
            const flightRoute = route.split('-');
            return {
              flightType: 2,
              departureTime: new Date(departureTime * 1000),
              departure: flightRoute[1],
              arrival: flightRoute[0],
              arrivalTime: new Date(arrivalTime * 1000)
            };
            // allFlights.push({
            //   flightType: 2,
            //   departureTime: new Date(departure * 1000),
            //   departure: flightRoute[1],
            //   arrival: flightRoute[0],
            //   arrivalTime: new Date(arrival * 1000)
            // });
          });

          setFlight({...flights, data: concat(businessData, cheapData)});
        }
      }, [cheapFlights, businessFlights]);
    
      return (
        <MaterialTable
          title="Flight List"
          icons={tableIcons}
          columns={flights.columns}
          data={flights.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setFlight(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setFlight(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setFlight(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      );
};

FlightList.propTypes = {
  cheapFlights: PropTypes.arrayOf(PropTypes.object),
  businessFlights:PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getCheapFlight: PropTypes.func.isRequired,
  getBusinessFlight: PropTypes.func.isRequired
};

FlightList.defaultProps = {
  cheapFlights: [],
  businessFlights: [],
  loading: false
};


export default FlightList;
