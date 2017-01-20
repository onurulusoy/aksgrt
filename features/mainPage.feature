#encoding: UTF-8
@mainPage_tests
Feature: Main Page Feature
  As a user of AKSigorta
  I want to surf on main page
  So that I will check the main page items, links etc

  Background:
    Given I am on the aksigorta login page

  @basicMainPage
  Scenario: Basic Main Page
    When I see "UyeIslemleri"
    Then I click "Musteri"

  @clickAndWait
  Scenario: Click And Wait
    When I see "yatrmci"
    Then I click "yatrmci" button
    Then I should see "Olaylar" panel

  @comboBoxItemCheck
  Scenario: Combo Box Item Check
    When I scroll to "AradigimSigorta"
    Then I click "jquery-selectbox-moreButton" button
    Then I should see all Row parents services
      |Ailemi Kapsasın|
      |Evimi Kapsasın|
      |Aracımı Kapsasın|
      |İşimi Kapsasın|

# Class examples for "I see ..."
    # SiteIciArama, UyeIslemleri, yatrmci, iletsm, menu, AramaIslemleri, AradigimSigorta, footer etc.

# Id examples for click
    # Musteri, IsOrtagi, AcenteAraButton, EczaneAraButton, menu-item-37, TeklifAl, DetayliBilgi

# Id examples for click
    # menu-item menu-item-type-post_type menu-item-object-page menu-item-103,