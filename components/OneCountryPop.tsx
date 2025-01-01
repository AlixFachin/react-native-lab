import React from 'react';
import { useEffect, useState } from 'react';
import { getPopulationTimeSeries } from '../lib/WorldBankAPI';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PopAPIBody } from '../lib/ApiTypes';
import { createPopulationTable } from '../lib/WorldBankData';

type Props = {
  countryCode: string;
  dateBegin: string;
  dateEnd: string;
};

export const OneCountryPop = (props: Props) => {
  const [timeSeries, setTimeSeries] = useState<PopAPIBody | []>([]);
  useEffect(() => {
    createPopulationTable();

    getPopulationTimeSeries(
      props.countryCode,
      props.dateBegin,
      props.dateEnd,
    ).then(data => {
      setTimeSeries(data);
    });
  }, [props]);

  return (
    <View>
      <Text>Country Code: {props.countryCode}</Text>
      <Text>Date Begin: {props.dateBegin}</Text>
      <Text>Date End: {props.dateEnd}</Text>
      {timeSeries.length > 0 ? <Text>{timeSeries[0]?.pages}</Text> : null}
      <FlatList
        data={timeSeries[1]}
        renderItem={({ item }) => (
          <View style={Styles.TimeSeriesDataBox}>
            <Text>Country: {item.countryIso3Code}</Text>
            <Text>
              Value:{' '}
              {!item.value || isNaN(item.value)
                ? item.value
                : item.value.toLocaleString()}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) =>
          `${item.countryIso3Code || index}-${item.date}`
        }
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  TimeSeriesDataBox: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
});
