import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, ActivityIndicator, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../../../../styles/Styles';
import { mainColor } from '../../../../styles/Styles';

export default function FinancialTips({ navigation }) {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchFinancialTips = async () => {
        setIsLoading(true);
  
        const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=savings&region=Kenya';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'abbe93ce9dmsh775e86c3b71486dp1d7400jsne997345f87cb',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
          },
        };
  
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          setTips(result);
        } catch (error) {
          console.error(error);
        }
  
        setIsLoading(false);
      };
  
      fetchFinancialTips();
    }, []);
  
    return (
      <View style={Styles.notificationsContainer}>
        {/* Header */}
        <View style={Styles.headerContainer}>
          {/* Back Button */}
          <TouchableOpacity style={Styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={mainColor} />
          </TouchableOpacity>
  
          {/* Title */}
          <Text style={Styles.nTitle}>Financial Tips</Text>
        </View>
  
        {/* Financial Tips */}
        <ScrollView style={{ paddingHorizontal: 16, marginTop: 16 }}>
          {isLoading ? (
            <ActivityIndicator size="large" color={mainColor} />
          ) : (
            <>
              {/* Display News */}
              {tips.news && tips.news.length > 0 && (
                <>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>News</Text>
                  {tips.news.slice(0, 5).map((newsItem, index) => (
                    <TouchableOpacity key={index} onPress={() => Linking.openURL(newsItem.link)}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        {newsItem.thumbnail && (
                          <Image source={{ uri: newsItem.thumbnail.resolutions[0].url }} style={{ width: 100, height: 66.7, marginRight: 10 }} />
                        )}
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: 'bold' }}>{newsItem.title}</Text>
                          <Text>{newsItem.publisher}</Text>
                          <Text>{new Date(newsItem.providerPublishTime * 1000).toLocaleString()}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </>
              )}
  
              {/* Display Quotes */}
              {tips.quotes && tips.quotes.length > 0 && (
                <>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 10 }}>Quotes</Text>
                  {tips.quotes.slice(0, 5).map((quoteItem, index) => (
                    <TouchableOpacity key={index}>
                      <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>{quoteItem.longname}</Text>
                        <Text>{quoteItem.exchange}</Text>
                        <Text>{quoteItem.symbol}</Text>
                        {quoteItem.thumbnail && (
                          <Image source={{ uri: quoteItem.thumbnail.resolutions[0].url }} style={{ width: 200, height: 133.4, marginTop: 10 }} />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>
    );
  }